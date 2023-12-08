export function asyncTest() {
    import('./utils').then(res => {
        console.log('res====', res)
    })
}