// ==============================
// HEALTHFORGE IMAGE ENGINE
// ==============================

const exerciseDB = {
    "Barbell Bench Press": {
        img: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
    },
    "Incline Dumbbell Press": {
        img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    },
    "Push-Up": {
        img: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c",
    },
    "Cable Fly": {
        img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    },
    "Dumbbell Fly": {
        img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
    },
    "Decline Bench Press": {
        img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    },
    "Chest Dips": {
        img: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50",
    },
    "Machine Chest Press": {
        img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    },
    "Pec Deck Fly": {
        img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff",
    },
    "Svend Press": {
        img: "https://images.unsplash.com/photo-1598971639058-ae38c9d1b1f9",
    },
    "Landmine Chest Press": {
        img: "https://images.unsplash.com/photo-1605296867724-fa87a8ef8cae",
    }
};

// Auto replace all images
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-exercise]").forEach(img => {
        const name = img.getAttribute("data-exercise");
        if (exerciseDB[name]) {
            img.src = exerciseDB[name].img + "?auto=format&fit=crop&w=800&q=80";
        }
    });
});

// Save feature
function saveExercise(name) {
    let saved = JSON.parse(localStorage.getItem("savedExercises")) || [];
    if (!saved.includes(name)) {
        saved.push(name);
        localStorage.setItem("savedExercises", JSON.stringify(saved));
        alert(name + " saved 💪");
    }
}
