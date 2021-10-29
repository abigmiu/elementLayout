/**
 * url查询
 */
const urlQuery = {
    queryDataName = 'queryData', // 查询对象

    mounted: function() {
        const query = qs.parse(this.$router.query)
        this[this.queryDataName] = query
    },

    methods: {
        /**
         * 替换当前URL
         */
        replaceRoute() {
            const oldQuery = JSON.stringify(this.$router.query);
            const newQuery = JSON.stringify(this[this.queryDataName])
            if (oldQuery === newQuery) return
            this.$router.replace(this[this.queryDataName])
        }
    }

}

export default urlQuery
