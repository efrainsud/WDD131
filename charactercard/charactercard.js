const character = {
    name: "Snortleblat",
    class: "Swamp Beast Warrior",
    level: 1,
    health: 100,

    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;
            
            if (this.health <= 0) {
                this.health = 0;
                alert("Character Died");
            }
        }
    },

    levelUp: function() {
        this.level += 1;
    }
};

function updateDisplay() {
    document.getElementById("char-name").textContent = character.name;
    document.getElementById("char-class").textContent = character.class;
    document.getElementById("char-level").textContent = character.level;
    document.getElementById("char-health").textContent = character.health;
}

document.getElementById("btn-attack").addEventListener("click", () => {
    character.attacked();
    updateDisplay();
});

document.getElementById("btn-level").addEventListener("click", () => {
    character.levelUp();
    updateDisplay();
});

updateDisplay();