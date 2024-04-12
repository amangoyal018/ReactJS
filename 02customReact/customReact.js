function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type) // create a new dom element
    domElement.innerHtml = reactElement.children // set the inner text of the dom element
    domElement.setAttribute('href', reactElement.props.href) // set the href attribute of the dom element
    domElement.setAttribute('target', reactElement.props.target) // set the target attribute of the dom element

}
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