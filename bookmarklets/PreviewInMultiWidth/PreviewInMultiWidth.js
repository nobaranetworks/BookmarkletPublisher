!function () {
	var html = `<style>
	:root {
		--iframe_scale: 0.4;
		--iframe_width_pcl: 1300px;
		--iframe_width_pcr: 1024px;
		--iframe_width_tb: 716px;
		--iframe_width_mobile: 320px;
		--display_width: calc((var(--iframe_width_pcl) + var(--iframe_width_pcr) + var(--iframe_width_tb) + var(--iframe_width_mobile)) * var(--iframe_scale));
		--header_height: 22px;
	}

	html,
	body {
		padding: 0;
		margin: 0;
		height: 100%;
		height: calc(100% - (var(--header_height) / 2));
	}

	.content {
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: row;
		overflow: hidden;
		width: var(--display_width);
		height: 100%;
	}

	.part {
		padding: 0;
		margin: 0;
		overflow: hidden;
		height: 100%;
	}

	.part h1 {
		padding: 0;
		margin: 0;
		text-align: center;
		font-size: 16px;
		background-color: yellowgreen;
		height: 18px;
	}

	.part_pcl {
		width: calc(var(--iframe_width_pcl) * var(--iframe_scale));
		border-left: 4px solid silver;
		border-right: 4px solid silver;
	}

	.part_pcr {
		width: calc(var(--iframe_width_pcr) * var(--iframe_scale));
		border-right: 4px solid silver;
	}

	.part_tb {
		width: calc(var(--iframe_width_tb) * var(--iframe_scale));
		border-right: 4px solid silver;
	}

	.part_mobile {
		width: calc(var(--iframe_width_mobile) * var(--iframe_scale));
		border-right: 4px solid silver;
	}

	.myiframe {
		padding: 0;
		margin: 0;
		transform: scale(var(--iframe_scale));
		transform-origin: 0 0;
		height: calc(100% / var(--iframe_scale));
		overflow: hidden;
	}

	.header {
		padding: 0;
		margin: 0;
		position: relative;
		background-color: silver;
		font-family: Arial;
		width: var(--display_width);
		height: var(--header_height);
	}

	.header h1.title {
		padding: 2px 16px;
		margin: 0;
		font-size: 16px;
	}

	.header div.copy {
		padding: 0;
		margin: 0;
		position: absolute;
		top: 2px;
		right: 8px;
		font-size: 10px;
	}
</style>
<script>
	var robj = ['<iframe class="myiframe" src="', '" width="', 'px"></iframe>'];
	var iframe = (w) => document.currentScript.outerHTML = String.raw({ raw: robj }, location.href, w);
	document.title = 'PreviewInMultiWidth';
</script>
<header class="header">
	<h1 class="title">Preview In Multi-Width</h1>
</header>
<div class="content">
	<div class="part part_pcl">
		<h1>PC Large 1300px</h1>
		<script>iframe(1300)</script>
	</div>
	<div class="part part_pcr">
		<h1>PC Regular 1024px</h1>
		<script>iframe(1024)</script>
	</div>
	<div class="part part_tb">
		<h1>Tablet 716px</h1>
		<script>iframe(716)</script>
	</div>
	<div class="part part_mobile">
		<h1>Mobile 320px</h1>
		<script>iframe(320)</script>
	</div>
</div>`;
	var win = window.open("", target = "_blank");
	win.document.open();
	win.document.write(html);
	win.document.close();
}();
