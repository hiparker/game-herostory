// @export
module.exports = {
    /**
     * 顺序调用
     * 
     * @param  {...any} oFunQ 函数队列
     * @return {void}
     */
    serial(...oFunQ) {
        if (!oFunQ || 
            oFunQ.length <= 0) {
            return;
        }

        // 回调函数
        let funCb = () => {
            if (!oFunQ || 
                oFunQ.length <= 0) {
                return;
            }

            // 函数对象出队
            let funCurr = oFunQ.shift();

            if (!funCurr) {
                funCb();
                return;
            }

            // 将回调函数作为参数
            funCurr(funCb);
        };

        funCb();
    },
};
