/**
 * class root
 * @param {string} target: 插入滚动弹幕的元素
 * @param {Array<string>} data: 弹幕内容
 * @param {number} speed: 弹幕移动的速度  取值[1-10]
 * @returns voild
 * @example
 *
 * class initital extend root
 *         or
 * new root({
 *     target:"body",
 *     data: ["第一条","第二条","第三条"],
 *     speed:-5
 * })
 * 
 */

export interface Options {
    target:string
    data:string[]
    speed: number
}

class root{

    /**
     * [options 构造函数参数]
     * @type {Options} 
     */
    protected options: Options = {
        target:"",
        data:[],
        speed: 5
    }

    /**
     * [targetElement 目标元素]
     * @type {HTMLElement}
     */
    protected targetElement:HTMLElement;

    constructor({target,data,speed}:{
        target:string,
        data:string[],
        speed: number
    }){
        this.extendOpt(arguments[0]);
        this.targetElement = <HTMLElement>document.querySelector(this.options.target);
    }

    /**
     * @param {Object} 构造函数参数赋值
     */
    extendOpt(opt){
        const that = this;
        for(const key in opt){
            if(opt.hasOwnProperty(key)){
                that.options[key] = opt[key];
            }
        }
    }

    /**
     * [createElement 生成滚动元素]
     * @param {string = ""} className [滚动元素类名]
     * @return {Array<HTMLElement>} divBox [滚动元素数组]
     */
    createElement(className:string = ""){

        // const scope = ~~(Math.random()*100) + (+new Date());
        const target = this.targetElement;
        const divBox:HTMLElement[] = [];
        let divWrapElement = <HTMLElement>document.querySelector(".scroxt-wrapper");
        
        if(!divWrapElement){
            divWrapElement = document.createElement('div');
            divWrapElement.className = "scroxt-wrapper";
            target.appendChild(divWrapElement);
        }
        for(let i = 0, len = this.options.data.length; i < len; i++){
            const div = document.createElement('div');
            div.className = className;
            const text = document.createTextNode(this.options.data[i]);
            div.appendChild(text);
            divWrapElement.appendChild(div)
            divBox.push(div);
        }
        return divBox;
    }

}

export default root;