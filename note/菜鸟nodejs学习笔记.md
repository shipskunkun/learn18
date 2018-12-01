菜鸟 node 学习文档


Sync 同步的意思  

```
同步读取 

var data = fs.readFileSync('input.txt');  


非同步读取

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
```