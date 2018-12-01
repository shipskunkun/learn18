<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont">&#xe624;</span>
	    </div>
	    <div class="header-input">
	    	<span class="iconfont">&#xe632;</span>请输入城市
	    </div>
	    <div class="header-right">
	    	<span class="iconfont">&#xe600;</span>
	    </div>
    </div>
</template>

<script >
	export default {
	 	name: 'Header'
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		height: 0.86rem
		display: flex
		background-color: $bgcolor
		color: #fff
		.header-left
			float: left
			width: .64rem
			line-height: .86rem
		.header-input
			text-align: left
			flex: 1
			line-height: .64rem
			margin: .12rem 0 .12rem .12rem
			background-color: #fff
			border-radius: .1rem
			color: #ccc
			padding-left: .2rem
		.header-right
			min-width: 1.04rem
			padding: 0 .1rem
			float: right
			text-align: center
			line-height: .86rem
			color: #fff
</style>