const upButton = document.getElementById('up-btn')
const downButton = document.getElementById('down-btn')
const leftButton = document.getElementById('left-btn')
const rightButton = document.getElementById('right-btn')


let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener("keydown", e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break 
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break 
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
        
        
    }
}
)




upButton.addEventListener("click", () => {
            if (lastInputDirection.y !== 0) return
            inputDirection = { x: 0, y: -1 }
        
})

downButton.addEventListener("click", () => {
            if (lastInputDirection.y !== 0) return
            inputDirection = { x: 0, y: 1 }
           
})
leftButton.addEventListener("click", () => {           
            if (lastInputDirection.x !== 0) return
            inputDirection = { x: -1, y: 0 }
})

rightButton.addEventListener("click", () => {
            if (lastInputDirection.x !== 0) return
            inputDirection = { x: 1, y: 0 }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}