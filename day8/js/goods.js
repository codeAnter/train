$(document).ready(function () {
    function delme() {
        var name = $(this).text();
        $(this).remove();
        $('#message').html('删除商品' + name);
    }
    $('#addbtn').click(function () {
        console.log('add button clicked');
        var name = $('#name').val();
        if (name.length > 0) {
            $('#goods').append('<li>' + name + '</li>');
            $('#goods li').click(delme);
            $('#name').val('');
            $('#message').html("添加新商品:" + name);
        }
    });
    $('#delbtn').click(function () {
        $('#goods li').remove();
        $('#message').html('删除所有的商品')
    });
    $('#goods li').click(delme);

    axios.get('http://mock-api.com/7gPXkZgl.mock/products')
        .then(function (res) {
            console.log("res", res.data);
            var i;
            var item;
            for (i = 0; i < res.data.length; ++i) {
                item = res.data[i];
                console.log('item', item);
                $('#goods').append('<li>' + item.name + ' ' + item.price + '</li>');
            }
            $('#goods li').click(delme);
        })
        .catch(function (e) {
            console.log('e', e);
        });
    console.log('continue');
});

