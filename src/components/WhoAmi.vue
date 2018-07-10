<template>
    <div class="whomai">
        <h1>Geeting information from {{ this.$serviceUrl }}</h1>
        <ul>
            <li>Your IP is {{ ipfrom }}</li>
            <li>Server hostname {{ hostname }}</li>
            <li>ip {{ ipto }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'WhoAmi',
        data () {
            return {
                hostname: '',
                ipfrom: '',
                ipto: ''
            }
        },
        mounted() {
            this.$http.get(this.$serviceUrl).then(result => {
                this.hostname = result.body.hostname
                this.ipfrom = result.body.ip[0]
                this.ipto = result.body.ip[1]
            }, error => {
                console.error(error)
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    margin: 0 10px;
}
</style>
