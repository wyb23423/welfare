/*
* 兑换商品
*/
export function exchange(e: IAnyObject) {
    const id = e.target.dataset.id;
    console.log(id);
}

/**
* (取消)收藏商品
*/
export function collect(e: IAnyObject) {
    const { id, collect } = e.target.dataset;
    console.log(id, collect);
}

export function none() {
    //
}