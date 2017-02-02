<template>
  <div>
    <scroller
      height="-55px"
      lock-x
      scrollbar-y
      use-pullup
      @on-pullup-loading="loadMore"
      use-pulldown
      @on-pulldown-loading="refresh"
      ref = 'scroller'
    >
      <div>
        <card v-for="item in items" :header="{title: item.name}">
          <img :src="$baseUrl + item.thumb" slot="content"/>
        </card>
      </div>
    </scroller>
  </div>
</template>

<script>
  import {Card, Scroller} from 'vux'

  export default {
    data () {
      return {
        page: 1,
        maxPage: 1,
        items: []
      }
    },
    components: {
      Card, Scroller
    },
    methods: {
      async getData () {
        let {code, msg: {data, max}} = await this.$ajax({
          api: 'index/product/index',
          data: {
            page: this.page
          }
        })

        data.forEach(obj => this.items.push(obj))

        this.maxPage = max
        if (this.page === max) {
          this.$refs.scroller.disablePullup()
        }
        this.$nextTick(() => {
          this.$refs.scroller.reset()
        })
        return new Promise((resolve, reject) => {
          resolve()
        })
      },
      async refresh () {
        this.page = 1
        this.items = []
        await this.getData()
        this.$refs.scroller.donePulldown()
      },
      async loadMore () {
        this.page = this.page === this.maxPage ? this.page : this.page + 1
        await this.getData()
        this.$refs.scroller.donePullup()
      }
    },
    mounted () {
      this.getData()
    }
  }
</script>