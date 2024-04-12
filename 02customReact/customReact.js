function customRender(reactElement, container){
    /*
    basic v1 as it adds attributes 1 by 1 which is not efficient
    const domElement = document.createElement(reactElement.type) 
    domElement.innerHtml = reactElement.children 
    domElement.setAttribute('href', reactElement.props.href) 
    domElement.setAttribute('target', reactElement.props.target) 
    container.appendChild(domElement) 
    */
   
    // v2

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])

    }
    container.appendChild(domElement)

}
// basically we are creating a new dom element and setting the inner text and attributes of the dom element
// and then we are appending the dom element to the container element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',

    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root') // get the root element

customRender(reactElement, mainContainer) // render the react element to the root element