// تحريك شرائط التقدم
document.addEventListener('DOMContentLoaded', () => {
    // تهيئة شرائط التقدم
    initializeProgressBars();
    
    // تهيئة الرسم البياني
    initializeSkillsChart();
    
    // تهيئة تأثيرات التمرير
    initializeScrollEffects();
});

function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 500);
    });
}

function initializeSkillsChart() {
    const ctx = document.getElementById('skills-chart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Microsoft Office', 'Power BI', 'Photoshop', 'الذكاء الاصطناعي', 'شبكات الحاسب'],
            datasets: [{
                label: 'مستوى المهارات',
                data: [95, 90, 85, 80, 75],
                backgroundColor: 'rgba(57, 73, 171, 0.2)',
                borderColor: 'rgba(57, 73, 171, 1)',
                pointBackgroundColor: 'rgba(57, 73, 171, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function initializeScrollEffects() {
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(section);
    });
}