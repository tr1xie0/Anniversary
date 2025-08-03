document.addEventListener('DOMContentLoaded', function() {
        // Create floating hearts
        createFloatingHearts();
        // Get all DOM elements
        const step1 = document.getElementById('step1');
        const step1Next = document.getElementById('step1-next');
        const anniversaryDate = document.getElementById('anniversary-date');
        
        const modal1 = document.getElementById('modal1');
        const modal1Next = document.getElementById('modal1-next');
        
        const step3 = document.getElementById('step3');
        const step3Next = document.getElementById('step3-next');
        
        const modal2 = document.getElementById('modal2');
        const modal2Next = document.getElementById('modal2-next');
        
        const step5 = document.getElementById('step5');
        const step5Next = document.getElementById('step5-next');
        
        const step6 = document.getElementById('step6');
        const quizForm = document.getElementById('quiz-form');
        
        const results = document.getElementById('results');
        const scoreDisplay = document.getElementById('score-display');

        // Correct answers for quiz
        const correctAnswers = {
            q1: "a", // Coffee shop
            q2: "b", // Sushi
            q3: "c", // July 22
            q4: "d", // Purple
            q5: "b"  // All of Me - John Legend
        };

        // Step 1: Login/Date input
        step1Next.addEventListener('click', function() {
            if (anniversaryDate.value) {
                // Store date in localStorage
                localStorage.setItem('anniversaryDate', anniversaryDate.value);
                
                // Hide step 1 and show modal 1
                step1.classList.remove('active');
                modal1.classList.add('active');
            } else {
                alert('Please select our anniversary date');
            }
        });

        // Modal 1 to Step 3
        modal1Next.addEventListener('click', function() {
            modal1.classList.remove('active');
            step3.classList.add('active');
        });

        // Step 3 to Modal 2
        step3Next.addEventListener('click', function() {
            step3.classList.remove('active');
            modal2.classList.add('active');
        });

        // Modal 2 to Step 5 (Gallery)
        modal2Next.addEventListener('click', function() {
            modal2.classList.remove('active');
            step5.classList.add('active');
        });

        // Step 5 to Step 6 (Quiz)
        step5Next.addEventListener('click', function() {
            step5.classList.remove('active');
            step6.classList.add('active');
        });

        // Quiz submission
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let score = 0;
            const formData = new FormData(quizForm);
            
            // Check each answer
            for (const [question, answer] of formData.entries()) {
                if (correctAnswers[question] === answer) {
                    score++;
                }
            }
            
            // Display score
            scoreDisplay.innerHTML = `You got ${score} out of 5 questions right!`;
            
            // Show results
            step6.classList.remove('active');
            results.classList.add('active');
        });
        
        // Function to create floating hearts
        function createFloatingHearts() {
            const container = document.getElementById('floating-hearts');
            const heartCount = 20;
            
            for (let i = 0; i < heartCount; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart';
                
                // Random position, scale, duration and delay
                const scale = Math.random() * 0.5 + 0.5;
                const duration = Math.random() * 15 + 10;
                const delay = Math.random() * 20;
                const leftPos = Math.random() * 100;
                const rotation = Math.random() * 360;
                const rotationEnd = rotation + (Math.random() * 360);
                
                heart.style.setProperty('--scale', scale);
                heart.style.setProperty('--duration', `${duration}s`);
                heart.style.setProperty('--delay', `${delay}s`);
                heart.style.setProperty('--rotation', `${rotation}deg`);
                heart.style.setProperty('--rotation-end', `${rotationEnd}deg`);
                heart.style.left = `${leftPos}%`;
                
                container.appendChild(heart);
            }
        }
    });