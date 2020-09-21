import { tsx, create } from '@dojo/framework/core/vdom';
import { node } from '@dojo/framework/core/vdom';
import WebMap from "@arcgis/core/WebMap";
// import MapView from "@arcgis/core/views/MapView";
// import Bookmarks from "@arcgis/core/widgets/Bookmarks";
// import Expand from "@arcgis/core/widgets/Expand";

import * as css from './styles/Home.m.css';

const factory = create({node});

async function loadMap(container: HTMLElement) {
	// const [WebMap] = await Promise.all(
	// 	import("@arcgis/core/WebMap");
	// );
	const webmap = new WebMap({
		portalItem: {
			id: "aa1d3f80270146208328cf66d022e09c",
		},
	});

	console.log(webmap, container);

	// const view = new MapView({
	// 	container,
	// 	map: webmap,
	// });

	// const bookmarks = new Bookmarks({
	// 	view: view,
	// 	// allows bookmarks to be added, edited, or deleted
	// 	editingEnabled: true,
	// });

	// const bkExpand = new Expand({
	// 	view: view,
	// 	content: bookmarks,
	// 	expanded: true,
	// });

	// // Add the widget to the top-right corner of the view
	// view.ui.add(bkExpand, "top-right");

	// // bonus - how many bookmarks in the webmap?
	// webmap.when(function () {
	// 	if (webmap.bookmarks && webmap.bookmarks.length) {
	// 		console.log("Bookmarks: ", webmap.bookmarks.length);
	// 	} else {
	// 		console.log("No bookmarks in this webmap.");
	// 	}
	// });
}

export default factory(function Profile({ middleware: { node } }) {
	const element = node.get('map-div');
	console.log('element', element);
	if (element) {
		loadMap(element);
	}
	return <div classes={[css.root]} key="map-div"></div>;
});
