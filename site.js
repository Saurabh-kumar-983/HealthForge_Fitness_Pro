// ==============================
// HEALTHFORGE IMAGE ENGINE v2.0
// ==============================

// Base image quality params
const IMG_PARAMS = "?auto=format&fit=crop&w=900&q=80";

// ==============================
// MASTER EXERCISE DATABASE
// ==============================

const exerciseDB = {

    // CHEST
    "Barbell Bench Press": { img: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e" },
    "Incline Dumbbell Press": { img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61" },
    "Push-Up": { img: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c" },
    "Cable Fly": { img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" },
    "Dumbbell Fly": { img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1" },
    "Decline Bench Press": { img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },

    // BACK
    "Pull-Up": { img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" },
    "Lat Pulldown": { img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61" },
    "Barbell Row": { img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642" },
    "Deadlift": { img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },

    // ARMS
    "Barbell Curl": { img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61" },
    "Hammer Curl": { img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642" },
    "Triceps Pushdown": { img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155" },
    "Skull Crusher": { img: "https://images.unsplash.com/photo-1605296867724-fa87a8ef8cae" },

    // LEGS
    "Squat": { img: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c" },
    "Leg Press": { img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155" },
    "Walking Lunge": { img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1" },
    "Romanian Deadlift": { img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },

    // CORE
    "Plank": { img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1" },
    "Crunch": { img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642" },
    "Leg Raise": { img: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c" },
    "Russian Twist": { img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" },

    // SHOULDERS
    "Overhead Press": { img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" },
    "Lateral Raise": { img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61" },
    "Front Raise": { img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642" }
};

// ==============================
// LOAD CUSTOM ADMIN DATA
// ==============================

const customExercises = JSON.parse(localStorage.getItem("customExercises")) || {};
Object.assign(exerciseDB, customExercises);

// ==============================
// IMAGE LOADER ENGINE
// ==============================

function loadExerciseImages() {
    document.querySelectorAll("[data-exercise]").forEach(img => {
        const name = img.getAttribute("data-exercise");

        // Lazy loading
        img.loading = "lazy";

        if (exerciseDB[name]) {
            img.src = exerciseDB[name].img + IMG_PARAMS;
        } else {
            // Fallback image
            img.src = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438" + IMG_PARAMS;
        }
    });
}

// ==============================
// SAVE FEATURE
// ==============================

function saveExercise(name) {
    let saved = JSON.parse(localStorage.getItem("savedExercises")) || [];

    if (!saved.includes(name)) {
        saved.push(name);
        localStorage.setItem("savedExercises", JSON.stringify(saved));

        alert(name + " saved 💪");
    } else {
        alert("Already saved ✅");
    }
}

// ==============================
// INIT
// ==============================

document.addEventListener("DOMContentLoaded", () => {
    loadExerciseImages();
});
