{
	let arr = [
	    { id: 0, },
	    { id: 1, parentId: 0, },
	    { id: 2, parentId: 0, },
	    { id: 3, parentId: 1, },
	    { id: 4, parentId: 1, },
	];


	// 改成这样的
	let after = {
	　　"id":0,
	　　"children":[
	　　　　{
	　　　　　　"id":1,
	　　　　　　"parentId":0,
	　　　　　　"children":[
	　　　　　　　　{
	　　　　　　　　　　"id":3,
	　　　　　　　　　　"parentId":1
	　　　　　　　　}
	　　　　　　]
	　　　　}
	　　]
	}

	//思路：
	let obj = {};
	arr.forEach(function(item, index) {
		if(!item.parentId) {
			obj.id = item.id;
			obj.children = [];
		}
		else {
			let parentId = item.parentId;
			if(obj.id == parentId) {
				obj.children.push($.extend(item, {parentId: obj.id}));
			}
			else {
				node = find(obj, parentId);
				if(!node.children) {
					node.children = [];
				}
				else {
					node.children.push($.extend(item, {parentId: node.id}))
				}
			}
		}
	})

	function(obj, parentId) {
		if(obj.id == parentId) {
			return obj;
		}
		else {
			if(!obj.children || obj.children.length) {
				return null;
			}
			if(obj.children.length) {
				$.each(obj.children, function(index, item) {
					if(item.id == parentId) {
						return item;
					}
				})
			}
		}
	}



}