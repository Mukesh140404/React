function customRender(reactElement,root){
    /* v1
    const domelement = document.createElement(reactElement.type);
    domelement.innerHTML = reactElement.children;
    domelement.setAttribute('href',reactElement.props.href);
    domelement.setAttribute('target',reactElement.props.target);
    
    root.appendChild(domelement);*/

    const dom_ele = document.createElement(reactElement.type);
    dom_ele.innerHTML=reactElement.children;
    for(const prop in reactElement.props){
        if(prop!=='childern'){
            dom_ele.setAttribute(prop,reactElement.props[prop]);
        }
    }
    root.appendChild(dom_ele);
}

const reactElement = {
    type:'a',
    props:{
        href: 'https://google.com',
        target:  '_blank'
    },
    children:'click me to visit'
}

const root = document.querySelector("#root");

customRender(reactElement,root)