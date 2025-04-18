<div>
                            <h4>${specialist.name}</h4>
                            <div>${specialist.specialty}</div>
                            <div class="rating">
                                <span class="stars">${'★'.repeat(Math.floor(specialist.rating))}${specialist.rating % 1 >= 0.5 ? '½' : ''}</span>
                                <span class="rating-number">${specialist.rating}</span>
                            </div>
                        </div>
                    </div>
                    
                    <form class="booking-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="booking-name">Your Name</label>
                                <input type="text" id="booking-name" required>
                            </div>
                            <div class="form-group">
                                <label for="booking-email">Email Address</label>
                                <input type="email" id="booking-email" required>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="booking-phone">Phone Number</label>
                                <input type="tel" id="booking-phone" required>
                            </div>
                            <div class="form-group">
                                <label for="booking-date">Preferred Date</label>
                                <input type="date" id="booking-date" required min="${new Date().toISOString().split('T')[0]}">
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="booking-time">Preferred Time</label>
                            <select id="booking-time" required>
                                <option value="">Select a time...</option>
                                <option value="morning">Morning (9am - 12pm)</option>
                                <option value="afternoon">Afternoon (1pm - 5pm)</option>
                                <option value="evening">Evening (5pm - 7pm)</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="booking-concern">Your Dental Concern</label>
                            <select id="booking-concern" required>
                                <option value="">Select your concern...</option>
                                <option value="missing">Missing Teeth</option>
                                <option value="crooked">Crooked Teeth</option>
                                <option value="discolored">Discolored Teeth</option>
                                <option value="damaged">Chipped or Damaged Teeth</option>
                                <option value="gummy">Gummy Smile</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="booking-notes">Additional Notes</label>
                            <textarea id="booking-notes" rows="3"></textarea>
                        </div>
                        
                        <div class="form-group consent-check">
                            <input type="checkbox" id="booking-consent" required>
                            <label for="booking-consent">I consent to being contacted regarding my appointment request.</label>
                        </div>
                        
                        <div class="form-actions">
                            <button type="button" class="cancel-btn">Cancel</button>
                            <button type="submit" class="cta-button">Request Appointment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to DOM
    modal.innerHTML = modalHTML;
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Handle close button
    modal.querySelector('.modal-close').addEventListener('click', () => {
        closeModal(modal);
    });
    
    // Handle cancel button
    modal.querySelector('.cancel-btn').addEventListener('click', () => {
        closeModal(modal);
    });
    
    // Handle click outside modal
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    // Handle form submission
    const form = modal.querySelector('.booking-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading-dots"></span>';
        submitBtn.disabled = true;
        
        // Simulate API call for booking
        setTimeout(() => {
            // Replace form with success message
            form.innerHTML = `
                <div class="booking-success">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <h3>Appointment Request Sent!</h3>
                    <p>Thank you for requesting a consultation with ${specialist.name}. Their office will contact you within 1 business day to confirm your appointment.</p>
                    <button class="cta-button close-success">Close</button>
                </div>
            `;
            
            // Handle close button
            form.querySelector('.close-success').addEventListener('click', () => {
                closeModal(modal);
            });
            
            // Track booking for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'appointment_request', {
                    'event_category': 'conversion',
                    'event_label': specialist.name
                });
            }
        }, 2000);
    });
    
    // Trap focus within modal for accessibility
    trapFocus(modal);
}

/**
 * Close modal dialog
 * @param {HTMLElement} modal - Modal element
 */
function closeModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.remove();
    }, 300);
}

/**
 * Trap keyboard focus within an element
 * @param {HTMLElement} element - Element to trap focus within
 */
function trapFocus(element) {
    const focusableElements = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    // Set initial focus
    firstFocusable.focus();
    
    // Handle tab navigation
    element.addEventListener('keydown', e => {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        } else if (e.key === 'Escape') {
            closeModal(element);
        }
    });
}

/**
 * Cost Estimator Calculator
 * Interactive tool to estimate treatment costs
 */
function initCostEstimator() {
    const costEstimator = document.querySelector('#cost-estimator');
    if (!costEstimator) return;
    
    // Treatment options with cost ranges
    const treatments = [
        {
            id: 'dental-implants',
            name: 'Dental Implants',
            description: 'Permanent replacement for missing teeth',
            baseCost: 3000,
            perToothCost: 1500,
            factorsAffectingCost: [
                'Number of implants',
                'Type of implant material',
                'Need for bone grafting',
                'Type of final restoration'
            ]
        },
        {
            id: 'veneers',
            name: 'Porcelain Veneers',
            description: 'Thin shells to improve appearance',
            baseCost: 800,
            perToothCost: 1200,
            factorsAffectingCost: [
                'Number of veneers',
                'Material (porcelain vs. composite)',
                'Complexity of placement'
            ]
        },
        {
            id: 'invisalign',
            name: 'Invisalign® Treatment',
            description: 'Clear aligners to straighten teeth',
            baseCost: 3500,
            perToothCost: 0,
            factorsAffectingCost: [
                'Treatment complexity',
                'Treatment duration',
                'Need for refinements'
            ]
        },
        {
            id: 'whitening',
            name: 'Professional Whitening',
            description: 'In-office teeth whitening',
            baseCost: 500,
            perToothCost: 0,
            factorsAffectingCost: [
                'Whitening method',
                'Number of sessions',
                'Current tooth color'
            ]
        }
    ];
    
    // Generate estimator HTML
    let estimatorHTML = `
        <div class="estimator-container">
            <h2>Treatment Cost Estimator</h2>
            <p>Get an estimate for your dental treatment. Actual costs may vary based on individual needs.</p>
            
            <div class="estimator-form">
                <div class="form-group">
                    <label for="treatment-select">Select Treatment</label>
                    <select id="treatment-select">
                        <option value="">Choose a treatment...</option>
    `;
    
    treatments.forEach(treatment => {
        estimatorHTML += `<option value="${treatment.id}">${treatment.name}</option>`;
    });
    
    estimatorHTML += `
                    </select>
                </div>
                
                <div class="form-group tooth-count" style="display: none;">
                    <label for="tooth-count">Number of Teeth</label>
                    <input type="number" id="tooth-count" min="1" max="32" value="1">
                </div>
                
                <div class="form-group complexity" style="display: none;">
                    <label for="complexity">Treatment Complexity</label>
                    <select id="complexity">
                        <option value="standard">Standard</option>
                        <option value="moderate">Moderate</option>
                        <option value="complex">Complex</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="insurance">Insurance Coverage</label>
                    <select id="insurance">
                        <option value="none">No Insurance</option>
                        <option value="basic">Basic Coverage (20%)</option>
                        <option value="standard">Standard Coverage (40%)</option>
                        <option value="premium">Premium Coverage (60%)</option>
                    </select>
                </div>
                
                <button id="calculate-btn" class="cta-button">Calculate Estimate</button>
            </div>
            
            <div class="estimate-results" style="display: none;">
                <h3>Your Estimated Cost</h3>
                <div class="estimate-breakdown"></div>
                <div class="estimate-disclaimer">
                    <p><strong>Note:</strong> This is an estimate only. Actual costs may vary based on examination findings and specific treatment needs. Contact a specialist for an accurate quote.</p>
                </div>
            </div>
        </div>
    `;
    
    costEstimator.innerHTML = estimatorHTML;
    
    // Get form elements
    const treatmentSelect = document.getElementById('treatment-select');
    const toothCountInput = document.getElementById('tooth-count');
    const complexitySelect = document.getElementById('complexity');
    const insuranceSelect = document.getElementById('insurance');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultsContainer = costEstimator.querySelector('.estimate-results');
    const breakdownContainer = costEstimator.querySelector('.estimate-breakdown');
    
    // Show/hide relevant form fields based on treatment
    treatmentSelect.addEventListener('change', () => {
        const selectedTreatment = treatmentSelect.value;
        const selectedTreatmentData = treatments.find(t => t.id === selectedTreatment);
        
        if (selectedTreatmentData) {
            // Show/hide tooth count input based on per-tooth cost
            if (selectedTreatmentData.perToothCost > 0) {
                document.querySelector('.tooth-count').style.display = 'block';
            } else {
                document.querySelector('.tooth-count').style.display = 'none';
            }
            
            // Show complexity selection for all treatments
            document.querySelector('.complexity').style.display = 'block';
        } else {
            document.querySelector('.tooth-count').style.display = 'none';
            document.querySelector('.complexity').style.display = 'none';
        }
    });
    
    // Calculate estimate on button click
    calculateBtn.addEventListener('click', () => {
        const selectedTreatmentId = treatmentSelect.value;
        
        if (!selectedTreatmentId) {
            alert('Please select a treatment');
            return;
        }
        
        const selectedTreatment = treatments.find(t => t.id === selectedTreatmentId);
        const toothCount = parseInt(toothCountInput.value) || 1;
        const complexity = complexitySelect.value;
        const insurance = insuranceSelect.value;
        
        // Calculate base cost
        let baseCost = selectedTreatment.baseCost;
        let perToothCost = selectedTreatment.perToothCost * toothCount;
        
        // Apply complexity multiplier
        let complexityMultiplier = 1;
        if (complexity === 'moderate') {
            complexityMultiplier = 1.2;
        } else if (complexity === 'complex') {
            complexityMultiplier = 1.5;
        }
        
        let totalBeforeInsurance = (baseCost + perToothCost) * complexityMultiplier;
        
        // Apply insurance discount
        let insuranceDiscount = 0;
        if (insurance === 'basic') {
            insuranceDiscount = totalBeforeInsurance * 0.2;
        } else if (insurance === 'standard') {
            insuranceDiscount = totalBeforeInsurance * 0.4;
        } else if (insurance === 'premium') {
            insuranceDiscount = totalBeforeInsurance * 0.6;
        }
        
        let finalCost = totalBeforeInsurance - insuranceDiscount;
        
        // Generate breakdown HTML
        let breakdownHTML = `
            <div class="cost-breakdown">
                <div class="breakdown-row">
                    <span>Base Treatment Cost:</span>
                    <span>${baseCost.toFixed(2)}</span>
                </div>
        `;
        
        if (perToothCost > 0) {
            breakdownHTML += `
                <div class="breakdown-row">
                    <span>Additional Teeth (${toothCount}):</span>
                    <span>${perToothCost.toFixed(2)}</span>
                </div>
            `;
        }
        
        if (complexityMultiplier > 1) {
            breakdownHTML += `
                <div class="breakdown-row">
                    <span>Complexity Adjustment:</span>
                    <span>+${((complexityMultiplier - 1) * 100).toFixed(0)}%</span>
                </div>
            `;
        }
        
        breakdownHTML += `
            <div class="breakdown-row">
                <span>Subtotal:</span>
                <span>${totalBeforeInsurance.toFixed(2)}</span>
            </div>
        `;
        
        if (insuranceDiscount > 0) {
            breakdownHTML += `
                <div class="breakdown-row">
                    <span>Insurance Coverage:</span>
                    <span>-${insuranceDiscount.toFixed(2)}</span>
                </div>
            `;
        }
        
        breakdownHTML += `
            <div class="breakdown-row total">
                <span>Estimated Total:</span>
                <span>${finalCost.toFixed(2)}</span>
            </div>
            
            <div class="cost-visualization">
                <div class="cost-bar">
                    <div class="cost-segment base-cost" style="width: ${(baseCost / totalBeforeInsurance) * 100}%;" data-label="Base Cost"></div>
                    ${perToothCost > 0 ? `<div class="cost-segment per-tooth-cost" style="width: ${(perToothCost / totalBeforeInsurance) * 100}%;" data-label="Per Tooth"></div>` : ''}
                    ${complexityMultiplier > 1 ? `<div class="cost-segment complexity-cost" style="width: ${(totalBeforeInsurance - baseCost - perToothCost) / totalBeforeInsurance * 100}%;" data-label="Complexity"></div>` : ''}
                </div>
                <div class="insurance-discount" style="width: ${(insuranceDiscount / totalBeforeInsurance) * 100}%" data-label="Insurance Discount"></div>
            </div>
            
            <div class="factors-list">
                <h4>Factors Affecting Cost</h4>
                <ul>
        `;
        
        selectedTreatment.factorsAffectingCost.forEach(factor => {
            breakdownHTML += `<li>${factor}</li>`;
        });
        
        breakdownHTML += `
                </ul>
            </div>
            
            <div class="next-steps">
                <a href="#find-specialist" class="cta-button">Find a Specialist for Consultation</a>
            </div>
        `;
        
        // Update and show results
        breakdownContainer.innerHTML = breakdownHTML;
        resultsContainer.style.display = 'block';
        
        // Add animation to cost breakdown
        setTimeout(() => {
            document.querySelectorAll('.cost-segment, .insurance-discount').forEach(segment => {
                segment.classList.add('animate');
            });
        }, 100);
        
        // Scroll to results
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
        
        // Track calculation for analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'cost_estimate', {
                'event_category': 'engagement',
                'event_label': selectedTreatment.name
            });
        }
    });
}

/**
 * Appointment Booking System
 * Direct appointment scheduling functionality
 */
function initAppointmentBooking() {
    const bookingButtons = document.querySelectorAll('.book-appointment-btn');
    if (!bookingButtons.length) return;
    
    bookingButtons.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            
            // Open booking modal
            openAppointmentModal();
        });
    });
}

/**
 * Opens the appointment booking modal
 */
function openAppointmentModal() {
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'modal appointment-modal';
    
    // Generate modal HTML
    const modalHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3>Schedule Your Free Consultation</h3>
            </div>
            <div class="modal-body">
                <div class="modal-intro">
                    <p>Take the first step toward your perfect smile. Schedule a free consultation with a specialist in your area.</p>
                </div>
                
                <form class="appointment-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="appointment-name">Your Name</label>
                            <input type="text" id="appointment-name" required>
                        </div>
                        <div class="form-group">
                            <label for="appointment-email">Email Address</label>
                            <input type="email" id="appointment-email" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="appointment-phone">Phone Number</label>
                            <input type="tel" id="appointment-phone" required>
                        </div>
                        <div class="form-group">
                            <label for="appointment-zip">Zip Code</label>
                            <input type="text" id="appointment-zip" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="appointment-treatment">Interested Treatment</label>
                        <select id="appointment-treatment" required>
                            <option value="">Select treatment...</option>
                            <option value="dental-implants">Dental Implants</option>
                            <option value="veneers">Porcelain Veneers</option>
                            <option value="invisalign">Invisalign® Treatment</option>
                            <option value="whitening">Professional Whitening</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    
                    <div class="form-group appointment-time-preferences">
                        <label>Preferred Time of Day</label>
                        <div class="checkbox-group">
                            <label class="checkbox-label">
                                <input type="checkbox" name="time-preference" value="morning"> Morning
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox" name="time-preference" value="afternoon"> Afternoon
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox" name="time-preference" value="evening"> Evening
                            </label>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="appointment-notes">Additional Notes</label>
                        <textarea id="appointment-notes" rows="3"></textarea>
                    </div>
                    
                    <div class="form-group consent-check">
                        <input type="checkbox" id="appointment-consent" required>
                        <label for="appointment-consent">I consent to being contacted about my appointment request.</label>
                    </div>
                    
                    <div class="form-actions">
                        <button type="button" class="cancel-btn">Cancel</button>
                        <button type="submit" class="cta-button">Schedule Consultation</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    // Add modal to DOM
    modal.innerHTML = modalHTML;
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Handle close button
    modal.querySelector('.modal-close').addEventListener('click', () => {
        closeModal(modal);
    });
    
    // Handle cancel button
    modal.querySelector('.cancel-btn').addEventListener('click', () => {
        closeModal(modal);
    });
    
    // Handle click outside modal
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    // Handle form submission
    const form = modal.querySelector('.appointment-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading-dots"></span>';
        submitBtn.disabled = true;
        
        // Simulate API call for booking
        setTimeout(() => {
            // Replace form with success message
            form.innerHTML = `
                <div class="booking-success">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <h3>Consultation Request Sent!</h3>
                    <p>Thank you for requesting a free consultation. A dental specialist in your area will contact you within 1 business day to schedule your appointment.</p>
                    <button class="cta-button close-success">Close</button>
                </div>
            `;
            
            // Handle close button
            form.querySelector('.close-success').addEventListener('click', () => {
                closeModal(modal);
            });
            
            // Track booking for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'consultation_request', {
                    'event_category': 'conversion',
                    'event_label': document.getElementById('appointment-treatment').value
                });
            }
        }, 2000);
    });
    
    // Trap focus within modal for accessibility
    trapFocus(modal);
}

/**
 * Progressive Web App Features
 * Enhances the website with PWA capabilities
 */
function initProgressiveWebAppFeatures() {
    // Check if the browser supports service workers
    if ('serviceWorker' in navigator) {
        // Register service worker
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    }
    
    // Add "Add to Home Screen" prompt
    let deferredPrompt;
    const addToHomeScreen = document.createElement('div');
    addToHomeScreen.className = 'add-to-home';
    addToHomeScreen.innerHTML = `
        <div class="add-to-home-content">
            <p>Add The New Smile Guide to your home screen for a better experience!</p>
            <div class="add-to-home-actions">
                <button class="cancel-add">Not Now</button>
                <button class="confirm-add">Add to Home Screen</button>
            </div>
        </div>
    `;
    addToHomeScreen.style.display = 'none';
    document.body.appendChild(addToHomeScreen);
    
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', e => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        
        // Stash the event so it can be triggered later
        deferredPrompt = e;
        
        // Show the "Add to Home Screen" banner
        addToHomeScreen.style.display = 'block';
    });
    
    // Handle "Add to Home Screen" button click
    document.querySelector('.confirm-add')?.addEventListener('click', () => {
        // Hide the "Add to Home Screen" banner
        addToHomeScreen.style.display = 'none';
        
        // Show the install prompt
        deferredPrompt.prompt();
        
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            
            // Clear the deferredPrompt variable
            deferredPrompt = null;
        });
    });
    
    // Handle "Not Now" button click
    document.querySelector('.cancel-add')?.addEventListener('click', () => {
        // Hide the "Add to Home Screen" banner
        addToHomeScreen.style.display = 'none';
    });
    
    // Add offline support notification
    window.addEventListener('online', () => {
        showToast('You are back online!', 'success');
    });
    
    window.addEventListener('offline', () => {
        showToast('You are offline. Some features may be unavailable.', 'warning');
    });
}

/**
 * Show toast notification
 * @param {string} message - Message to display
 * @param {string} type - Notification type (success, warning, error)
 */
function showToast(message, type = 'info') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    // Add to DOM
    const toastContainer = document.querySelector('.toast-container') || createToastContainer();
    toastContainer.appendChild(toast);
    
    // Show toast with animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Auto-hide toast after delay
    setTimeout(() => {
        toast.classList.remove('show');
        
        // Remove from DOM after animation completes
        setTimeout(() => {
            toast.remove();
            
            // Remove toast container if empty
            if (!toastContainer.children.length) {
                toastContainer.remove();
            }
        }, 300);
    }, 5000);
}

/**
 * Create toast container
 * @returns {HTMLElement} - Toast container element
 */
function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
}

/**
 * Utility Functions
 */

/**
 * Checks if an element is in the viewport
 * @param {HTMLElement} element - The element to check
 * @param {number} offset - Optional offset to trigger before element is fully visible
 * @returns {boolean} - Whether the element is in viewport
 */
function isElementInViewport(element, offset = 0) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
        rect.bottom >= 0 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) - offset &&
        rect.right >= 0
    );
}

/**
 * Throttle function to limit execution rate
 * @param {Function} func - The function to throttle
 * @param {number} limit - Minimum time between executions in milliseconds
 * @returns {Function} - Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Debounce function to prevent excessive executions
 * @param {Function} func - The function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, delay) {
    let timeoutId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

/**
 * Format currency value
 * @param {number} value - Value to format
 * @returns {string} - Formatted currency string
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(value);
}

/**
 * Get URL parameter by name
 * @param {string} name - Parameter name
 * @returns {string|null} - Parameter value or null if not found
 */
function getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

/**
 * Set cookie
 * @param {string} name - Cookie name
 * @param {string} value - Cookie value
 * @param {number} days - Cookie expiration in days
 */
function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ''}${expires}; path=/`;
}

/**
 * Get cookie by name
 * @param {string} name - Cookie name
 * @returns {string|null} - Cookie value or null if not found
 */
function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

/**
 * Initialize site-wide personalization
 * Customizes site content based on user preferences and behavior
 */
function initPersonalization() {
    // Load previously saved quiz results if available
    const savedResults = localStorage.getItem('smileJourneyResults');
    if (savedResults) {
        const results = JSON.parse(savedResults);
        
        // Show personalized banner if no cookie to hide it
        if (!getCookie('hidePersonalizedBanner')) {
            showPersonalizedBanner(results);
        }
        
        // Highlight relevant treatments
        highlightRelevantTreatments(results);
    }
    
    // Handle UTM parameters
    const utmSource = getUrlParam('utm_source');
    const utmMedium = getUrlParam('utm_medium');
    const utmCampaign = getUrlParam('utm_campaign');
    
    if (utmSource || utmMedium || utmCampaign) {
        // Save UTM parameters to session storage
        sessionStorage.setItem('utm_source', utmSource || '');
        sessionStorage.setItem('utm_medium', utmMedium || '');
        sessionStorage.setItem('utm_campaign', utmCampaign || '');
        
        // Customize content based on campaign source
        if (utmSource === 'instagram' || utmSource === 'facebook') {
            addSocialProofElements();
        } else if (utmSource === 'google' && utmMedium === 'cpc') {
            addSearchRelevantContent();
        }
    }
    
    // Show pop-up for exit intent
    initExitIntentPopup();
}

/**
 * Show personalized banner based on previous quiz results
 * @param {Object} results - Quiz results data
 */
function showPersonalizedBanner(results) {
    const concern = results.concern || 'missing';
    const concernText = getConcernText(concern);
    
    const banner = document.createElement('div');
    banner.className = 'personalized-banner';
    
    banner.innerHTML = `
        <div class="banner-content">
            <h3>Welcome Back!</h3>
            <p>Continue exploring solutions for ${concernText}.</p>
            <button class="cta-button">Resume Your Smile Journey</button>
            <button class="close-banner">&times;</button>
        </div>
    `;
    
    document.body.insertBefore(banner, document.body.firstChild);
    
    // Show banner with animation
    setTimeout(() => {
        banner.classList.add('visible');
    }, 1000);
    
    // Handle banner actions
    banner.querySelector('.cta-button').addEventListener('click', () => {
        // Scroll to relevant section
        const relevantSection = document.querySelector(`#${concern}-section`) || document.querySelector('#smile-journey');
        if (relevantSection) {
            relevantSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Hide banner
        banner.classList.remove('visible');
    });
    
    banner.querySelector('.close-banner').addEventListener('click', () => {
        banner.classList.remove('visible');
        
        // Set cookie to prevent showing again for 7 days
        setCookie('hidePersonalizedBanner', 'true', 7);
    });
}

/**
 * Highlight treatments relevant to user's interests
 * @param {Object} results - Quiz results data
 */
function highlightRelevantTreatments(results) {
    const concern = results.concern || '';
    
    // Map concerns to relevant treatment sections
    const concernTreatmentMap = {
        'missing': ['dental-implants', 'bridges'],
        'crooked': ['invisalign', 'braces'],
        'discolored': ['whitening', 'veneers'],
        'damaged': ['veneers', 'bonding', 'crowns'],
        'gummy': ['gum-contouring', 'orthodontics']
    };
    
    // Get relevant treatments for the user's concern
    const relevantTreatments = concernTreatmentMap[concern] || [];
    
    // Add highlight class to relevant treatment cards or sections
    relevantTreatments.forEach(treatment => {
        const treatmentElements = document.querySelectorAll(`.treatment-card[data-treatment="${treatment}"], #${treatment}-section`);
        
        treatmentElements.forEach(element => {
            element.classList.add('highlighted-treatment');
            
            // Add "Recommended for You" label
            const recommendedLabel = document.createElement('div');
            recommendedLabel.className = 'recommended-label';
            recommendedLabel.textContent = 'Recommended for You';
            element.appendChild(recommendedLabel);
        });
    });
}

/**
 * Add social proof elements for social media visitors
 */
function addSocialProofElements() {
    // Add social proof elements to the page
    const socialProofContainer = document.createElement('div');
    socialProofContainer.className = 'social-proof';
    
    socialProofContainer.innerHTML = `
        <div class="social-proof-header">
            <h3>Join thousands of happy patients</h3>
        </div>
        <div class="social-proof-grid">
            <div class="social-proof-item">
                <div class="proof-count">2,500+</div>
                <div class="proof-label">Successful Treatments</div>
            </div>
            <div class="social-proof-item">
                <div class="proof-count">98%</div>
                <div class="proof-label">Satisfaction Rate</div>
            </div>
            <div class="social-proof-item">
                <div class="proof-count">500+</div>
                <div class="proof-label">5-Star Reviews</div>
            </div>
        </div>
    `;
    
    // Insert after the hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.after(socialProofContainer);
    }
}

/**
 * Add content relevant to search engine visitors
 */
function addSearchRelevantContent() {
    // Add FAQ section for search visitors
    const faqSection = document.createElement('section');
    faqSection.className = 'faq-section';
    
    faqSection.innerHTML = `
        <div class="container">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-container">
                <div class="accordion">
                    <div class="accordion-header">
                        <h3>How long do dental implants last?</h3>
                        <span class="accordion-icon">+</span>
                    </div>
                    <div class="accordion-content">
                        <div class="accordion-inner">
                            <p>With proper care and maintenance, dental implants can last a lifetime. The implant itself (the titanium post) has a success rate of up to 95% over 10 years. The crown attached to the implant typically lasts 10-15 years before needing replacement due to normal wear and tear.</p>
                        </div>
                    </div>
                </div>
                
                <div class="accordion">
                    <div class="accordion-header">
                        <h3>How much do porcelain veneers cost?</h3>
                        <span class="accordion-icon">+</span>
                    </div>
                    <div class="accordion-content">
                        <div class="accordion-inner">
                            <p>Porcelain veneers typically cost between $925 and $2,500 per tooth. The price varies based on the number of veneers needed, the complexity of your case, the expertise of your dentist, and your geographic location. Our Cost Estimator tool can provide a personalized estimate for your specific situation.</p>
                        </div>
                    </div>
                </div>
                
                <div class="accordion">
                    <div class="accordion-header">
                        <h3>Is Invisalign as effective as traditional braces?</h3>
                        <span class="accordion-icon">+</span>
                    </div>
                    <div class="accordion-content">
                        <div class="accordion-inner">
                            <p>Invisalign is effective for mild to moderate orthodontic issues, including crowding, spacing, and some bite problems. For more complex cases, traditional braces may be more effective. A consultation with a specialist will determine which option is best for your specific needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insert before the footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.before(faqSection);
    }
    
    // Initialize accordions in the new section
    initAccordions();
}

/**
 * Initialize exit intent popup
 * Shows a popup when the user is about to leave the site
 */
function initExitIntentPopup() {
    // Check if popup has been shown in this session
    if (sessionStorage.getItem('exitPopupShown')) {
        return;
    }
    
    // Create popup element
    const popup = document.createElement('div');
    popup.className = 'modal exit-popup';
    
    popup.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3>Before You Go...</h3>
            </div>
            <div class="modal-body">
                <p>Get our free guide to choosing the right cosmetic dental treatment for your needs.</p>
                <form class="lead-capture-form">
                    <div class="form-group">
                        <input type="email" placeholder="Your Email Address" required>
                    </div>
                    <button type="submit" class="cta-button">Get Free Guide</button>
                </form>
                <div class="modal-footer">
                    <p class="small">We respect your privacy and will never share your information.</p>
                </div>
            </div>
        </div>
    `;
    
    // Add to DOM but keep hidden
    document.body.appendChild(popup);
    
    // Detect exit intent
    document.addEventListener('mouseleave', e => {
        // Only trigger when mouse leaves at the top of the page
        if (e.clientY < 20 && !sessionStorage.getItem('exitPopupShown')) {
            // Show popup
            popup.classList.add('active');
            
            // Mark as shown
            sessionStorage.setItem('exitPopupShown', 'true');
        }
    });
    
    // Handle close button
    popup.querySelector('.modal-close').addEventListener('click', () => {
        closeModal(popup);
    });
    
    // Handle form submission
    popup.querySelector('.lead-capture-form').addEventListener('submit', e => {
        e.preventDefault();
        
        // Show success message
        popup.querySelector('.modal-body').innerHTML = `
            <div class="success-message">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3>Thank You!</h3>
                <p>Your free guide is on its way to your inbox.</p>
                <button class="cta-button close-success">Close</button>
            </div>
        `;
        
        // Handle close button
        popup.querySelector('.close-success').addEventListener('click', () => {
            closeModal(popup);
        });
        
        // Track form submission for analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'lead_capture', {
                'event_category': 'conversion',
                'event_label': 'exit_popup'
            });
        }
    });
}

// Initialize personalization features
document.addEventListener('DOMContentLoaded', function() {
    initPersonalization();
});

// Add smart lead generation based on visitor behavior
function initSmartLeadGeneration() {
    // Track scroll depth
    let maxScrollDepth = 0;
    let scrollTimer;
    
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        
        scrollTimer = setTimeout(() => {
            // Calculate current scroll depth as percentage
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollDepth = (scrollTop / scrollHeight) * 100;
            
            // Update max scroll depth
            if (scrollDepth > maxScrollDepth) {
                maxScrollDepth = scrollDepth;
                
                // If user scrolls more than 70% and no lead capture has occurred
                if (maxScrollDepth > 70 && !sessionStorage.getItem('leadCaptureShown')) {
                    showInlineLeadCapture();
                }
            }
        }, 100);
    });
    
    // Track time on page
    let timeOnPage = 0;
    const timeInterval = setInterval(() => {
        timeOnPage += 5;
        
        // If user spends more than 60 seconds and no lead capture has occurred
        if (timeOnPage >= 60 && !sessionStorage.getItem('leadCaptureShown')) {
            showPopupLeadCapture();
            clearInterval(timeInterval);
        }
    }, 5000);
}

/**
 * Show inline lead capture form
 */
function showInlineLeadCapture() {
    // Create inline lead capture element
    const leadCapture = document.createElement('div');
    leadCapture.className = 'inline-lead-capture';
    
    leadCapture.innerHTML = `
        <div class="lead-capture-content">
            <div class="lead-capture-text">
                <h3>Get Personalized Treatment Recommendations</h3>
                <p>Join our community to receive customized treatment recommendations and special offers.</p>
            </div>
            <form class="lead-capture-form">
                <div class="form-group">
                    <input type="email" placeholder="Your Email Address" required>
                </div>
                <button type="submit" class="cta-button">Send Me Recommendations</button>
            </form>
            <button class="close-lead-capture">&times;</button>
        </div>
    `;
    
    // Find suitable location to insert (before the specialist section)
    const targetSection = document.querySelector('#find-specialist') || document.querySelector('footer');
    if (targetSection) {
        targetSection.before(leadCapture);
    }
    
    // Show with animation
    setTimeout(() => {
        leadCapture.classList.add('visible');
    }, 500);
    
    // Mark as shown
    sessionStorage.setItem('leadCaptureShown', 'true');
    
    // Handle close button
    leadCapture.querySelector('.close-lead-capture').addEventListener('click', () => {
        leadCapture.classList.remove('visible');
        setTimeout(() => {
            leadCapture.remove();
        }, 300);
    });
    
    // Handle form submission
    leadCapture.querySelector('.lead-capture-form').addEventListener('submit', e => {
        e.preventDefault();
        
        // Show success message
        leadCapture.querySelector('.lead-capture-content').innerHTML = `
            <div class="success-message">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3>Thank You!</h3>
                <p>Your personalized recommendations will be sent shortly.</p>
                <button class="cta-button close-success">Continue Browsing</button>
            </div>
        `;
        
        // Handle close button
        leadCapture.querySelector('.close-success').addEventListener('click', () => {
            leadCapture.classList.remove('visible');
            setTimeout(() => {
                leadCapture.remove();
            }, 300);
        });
        
        // Track form submission for analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'lead_capture', {
                'event_category': 'conversion',
                'event_label': 'inline_form'
            });
        }
    });
}

/**
 * Show popup lead capture form
 */
function showPopupLeadCapture() {
    // Create popup element
    const popup = document.createElement('div');
    popup.className = 'modal lead-popup';
    
    popup.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3>Unlock Premium Smile Content</h3>
            </div>
            <div class="modal-body">
                <p>Subscribe to receive exclusive treatment guides, special offers, and expert advice on your smile journey.</p>
                <form class="lead-capture-form">
                    <div class="form-group">
                        <input type="email" placeholder="Your Email Address" required>
                    </div>
                    <button type="submit" class="cta-button">Subscribe Now</button>
                </form>
                <div class="modal-footer">
                    <p class="small">We respect your privacy and will never share your information.</p>
                </div>
            </div>
        </div>
    `;
    
    // Add to DOM
    document.body.appendChild(popup);
    
    // Show popup with animation
    setTimeout(() => {
        popup.classList.add('active');
    }, 10);
    
    // Mark as shown
    sessionStorage.setItem('leadCaptureShown', 'true');
    
    // Handle close button
    popup.querySelector('.modal-close').addEventListener('click', () => {
        closeModal(popup);
    });
    
    // Handle click outside modal
    popup.addEventListener('click', e => {
        if (e.target === popup) {
            closeModal(popup);
        }
    });
    
    // Handle form submission
    popup.querySelector('.lead-capture-form').addEventListener('submit', e => {
        e.preventDefault();
        
        // Show success message
        popup.querySelector('.modal-body').innerHTML = `
            <div class="success-message">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3>Welcome to Our Community!</h3>
                <p>Check your inbox for exclusive content and offers.</p>
                <button class="cta-button close-success">Continue Browsing</button>
            </div>
        `;
        
        // Handle close button
        popup.querySelector('.close-success').addEventListener('click', () => {
            closeModal(popup);
        });
        
        // Track form submission for analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'lead_capture', {
                'event_category': 'conversion',
                'event_label': 'popup_form'
            });
        }
    });
    
    // Trap focus within modal for accessibility
    trapFocus(popup);
}

// Initialize smart lead generation
document.addEventListener('DOMContentLoaded', function() {
    initSmartLeadGeneration();
});

// Initialize everything when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('The New Smile Guide - Website Initialized');
});
            <h3>Your Personalized Recommendations</h3>
            <div class="results-content"></div>
            <button class="quiz-restart">Start Over</button>
        </div>
    `;
    
    quizHTML += '</div>';
    quizContainer.innerHTML = quizHTML;
    
    // Track user selections
    const userSelections = {};
    
    // Handle option selection
    quizContainer.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            const value = this.getAttribute('data-value');
            
            // Highlight selected option
            const siblings = quizContainer.querySelectorAll(`.quiz-option[data-question="${question}"]`);
            siblings.forEach(sib => sib.classList.remove('selected'));
            this.classList.add('selected');
            
            // Store selection
            userSelections[question] = value;
            
            // Auto-advance to next question after short delay
            const currentStep = this.closest('.quiz-step');
            const currentStepNum = parseInt(currentStep.getAttribute('data-step'));
            const nextStep = quizContainer.querySelector(`.quiz-step[data-step="${currentStepNum + 1}"]`);
            
            if (nextStep) {
                setTimeout(() => {
                    currentStep.style.display = 'none';
                    nextStep.style.display = 'block';
                }, 500);
            }
        });
    });
    
    // Handle previous button
    quizContainer.querySelectorAll('.quiz-prev').forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = this.closest('.quiz-step');
            const currentStepNum = parseInt(currentStep.getAttribute('data-step'));
            const prevStep = quizContainer.querySelector(`.quiz-step[data-step="${currentStepNum - 1}"]`);
            
            if (prevStep) {
                currentStep.style.display = 'none';
                prevStep.style.display = 'block';
            }
        });
    });
    
    // Handle submit button
    const submitButton = quizContainer.querySelector('.quiz-submit');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            // Get results container
            const resultsContainer = quizContainer.querySelector('.quiz-results');
            const resultsContent = quizContainer.querySelector('.results-content');
            
            // Hide all steps
            quizContainer.querySelectorAll('.quiz-step').forEach(step => {
                step.style.display = 'none';
            });
            
            // Generate personalized recommendations based on user selections
            let recommendations = generateRecommendations(userSelections);
            
            // Display results
            resultsContent.innerHTML = recommendations;
            resultsContainer.style.display = 'block';
            
            // Add animation classes
            resultsContainer.classList.add('fade-in-section');
            setTimeout(() => {
                resultsContainer.classList.add('is-visible');
            }, 100);
            
            // Track quiz completion for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'quiz_completion', {
                    'event_category': 'engagement',
                    'event_label': 'smile_journey_quiz'
                });
            }
            
            // Save quiz results to localStorage for personalization
            localStorage.setItem('smileJourneyResults', JSON.stringify(userSelections));
        });
    }
    
    // Handle restart button
    const restartButton = quizContainer.querySelector('.quiz-restart');
    if (restartButton) {
        restartButton.addEventListener('click', function() {
            // Reset selections
            Object.keys(userSelections).forEach(key => delete userSelections[key]);
            
            // Reset UI
            quizContainer.querySelectorAll('.quiz-option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Hide results
            quizContainer.querySelector('.quiz-results').style.display = 'none';
            
            // Show first step
            quizContainer.querySelector('.quiz-step[data-step="1"]').style.display = 'block';
        });
    }
}

/**
 * Generate personalized recommendations based on user selections
 * @param {Object} selections - User's quiz selections
 * @returns {string} - HTML content for recommendations
 */
function generateRecommendations(selections) {
    // Treatment options mapping
    const treatments = {
        'missing': {
            primary: 'Dental Implants',
            alternativeMedium: 'Dental Bridge',
            alternativeBudget: 'Removable Partial Denture'
        },
        'crooked': {
            primary: 'Invisalign® Clear Aligners',
            alternativeMedium: 'Traditional Braces',
            alternativeBudget: 'Limited Orthodontic Treatment'
        },
        'discolored': {
            primary: 'Porcelain Veneers',
            alternativeMedium: 'Professional Whitening',
            alternativeBudget: 'At-Home Whitening Kit'
        },
        'damaged': {
            primary: 'Porcelain Veneers',
            alternativeMedium: 'Dental Bonding',
            alternativeBudget: 'Composite Fillings'
        },
        'gummy': {
            primary: 'Laser Gum Contouring',
            alternativeMedium: 'Porcelain Veneers',
            alternativeBudget: 'Orthodontic Treatment'
        }
    };
    
    const concern = selections.concern || 'missing';
    const timeline = selections.timeline || 'medium';
    const budget = selections.budget || 'standard';
    
    // Determine primary recommendation
    let primaryRecommendation = treatments[concern].primary;
    
    // Adjust based on timeline and budget
    if (timeline === 'immediate' && budget === 'economy') {
        primaryRecommendation = treatments[concern].alternativeBudget;
    } else if (timeline === 'longterm' && budget === 'economy') {
        primaryRecommendation = treatments[concern].alternativeMedium;
    } else if (budget === 'economy') {
        primaryRecommendation = treatments[concern].alternativeBudget;
    }
    
    // Generate HTML
    let html = '<div class="recommendations">';
    
    // Primary recommendation
    html += `
        <div class="recommendation-card primary">
            <h4>Your Ideal Treatment</h4>
            <div class="treatment-name">${primaryRecommendation}</div>
            <p>Based on your concerns about ${getConcernText(concern)} and preferences for ${getTimelineText(timeline)} treatment within a ${getBudgetText(budget)} budget.</p>
            <a href="#${primaryRecommendation.toLowerCase().replace(/[^\w]+/g, '-')}" class="cta-button">Learn More</a>
        </div>
    `;
    
    // Alternative options
    html += '<h4>Alternative Options to Consider</h4><div class="options-grid">';
    
    // Add other treatment options
    Object.values(treatments[concern]).forEach(treatment => {
        if (treatment !== primaryRecommendation) {
            html += `
                <div class="option-button">
                    <span>${treatment}</span>
                </div>
            `;
        }
    });
    
    html += '</div>';
    
    // Next steps
    html += `
        <div class="next-steps">
            <h4>Your Next Steps</h4>
            <ol>
                <li>Learn more about ${primaryRecommendation} in our <a href="#smile-academy">Smile Academy</a></li>
                <li>Use our <a href="#cost-estimator">Cost Estimator</a> to plan your budget</li>
                <li>Find a specialist near you with our <a href="#find-specialist">Specialist Finder</a></li>
            </ol>
        </div>
    `;
    
    html += '</div>';
    return html;
}

/**
 * Get human-readable text for concern selection
 */
function getConcernText(concern) {
    const concernMap = {
        'missing': 'missing teeth',
        'crooked': 'teeth alignment',
        'discolored': 'tooth discoloration',
        'damaged': 'damaged teeth',
        'gummy': 'gum appearance'
    };
    return concernMap[concern] || concern;
}

/**
 * Get human-readable text for timeline selection
 */
function getTimelineText(timeline) {
    const timelineMap = {
        'immediate': 'quick',
        'medium': 'moderate-length',
        'longterm': 'gradual'
    };
    return timelineMap[timeline] || timeline;
}

/**
 * Get human-readable text for budget selection
 */
function getBudgetText(budget) {
    const budgetMap = {
        'economy': 'cost-effective',
        'standard': 'standard',
        'premium': 'premium'
    };
    return budgetMap[budget] || budget;
}

/**
 * Before/After Image Slider
 * Interactive slider to compare dental treatment results
 */
function initBeforeAfterSlider() {
    const sliders = document.querySelectorAll('.before-after-slider');
    if (!sliders.length) return;
    
    sliders.forEach(slider => {
        // Get image elements
        const beforeImg = slider.querySelector('.before-image');
        const afterImg = slider.querySelector('.after-image');
        
        if (!beforeImg || !afterImg) return;
        
        // Create slider handle
        const sliderHandle = document.createElement('div');
        sliderHandle.className = 'slider-handle';
        sliderHandle.innerHTML = '<div class="handle-circle"></div>';
        
        // Create slider divider
        const sliderDivider = document.createElement('div');
        sliderDivider.className = 'slider-divider';
        
        // Add elements to container
        slider.appendChild(sliderDivider);
        slider.appendChild(sliderHandle);
        
        // Set initial position (50%)
        setSliderPosition(slider, 50);
        
        // Add event listeners for dragging
        let isDragging = false;
        
        sliderHandle.addEventListener('mousedown', () => {
            isDragging = true;
            slider.classList.add('active');
        });
        
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                slider.classList.remove('active');
            }
        });
        
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                // Calculate slider position
                const rect = slider.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const position = (x / rect.width) * 100;
                
                // Set position within bounds (0-100%)
                setSliderPosition(slider, Math.min(Math.max(position, 0), 100));
            }
        });
        
        // Touch support for mobile
        sliderHandle.addEventListener('touchstart', (e) => {
            isDragging = true;
            slider.classList.add('active');
            e.preventDefault();
        });
        
        document.addEventListener('touchend', () => {
            if (isDragging) {
                isDragging = false;
                slider.classList.remove('active');
            }
        });
        
        document.addEventListener('touchmove', (e) => {
            if (isDragging && e.touches[0]) {
                // Calculate slider position
                const rect = slider.getBoundingClientRect();
                const x = e.touches[0].clientX - rect.left;
                const position = (x / rect.width) * 100;
                
                // Set position within bounds (0-100%)
                setSliderPosition(slider, Math.min(Math.max(position, 0), 100));
                e.preventDefault();
            }
        });
        
        // Add labels
        const beforeLabel = document.createElement('div');
        beforeLabel.className = 'slider-label before-label';
        beforeLabel.textContent = 'Before';
        
        const afterLabel = document.createElement('div');
        afterLabel.className = 'slider-label after-label';
        afterLabel.textContent = 'After';
        
        slider.appendChild(beforeLabel);
        slider.appendChild(afterLabel);
    });
}

/**
 * Set the position of a before/after slider
 * @param {HTMLElement} slider - The slider container
 * @param {number} position - Position percentage (0-100)
 */
function setSliderPosition(slider, position) {
    // Get elements
    const afterImg = slider.querySelector('.after-image');
    const handle = slider.querySelector('.slider-handle');
    const divider = slider.querySelector('.slider-divider');
    const beforeLabel = slider.querySelector('.before-label');
    const afterLabel = slider.querySelector('.after-label');
    
    // Set positions
    if (afterImg) afterImg.style.width = `${position}%`;
    if (handle) handle.style.left = `${position}%`;
    if (divider) divider.style.left = `${position}%`;
    
    // Update label visibility
    if (beforeLabel) beforeLabel.style.opacity = position > 75 ? 0 : 1;
    if (afterLabel) afterLabel.style.opacity = position < 25 ? 0 : 1;
}

/**
 * Dental Procedure Explainer
 * Interactive visual explainers for dental procedures
 */
function initDentalProcedureExplainer() {
    const explainers = document.querySelectorAll('.procedure-explainer');
    if (!explainers.length) return;
    
    explainers.forEach(explainer => {
        // Get steps container
        const stepsContainer = explainer.querySelector('.procedure-steps');
        if (!stepsContainer) return;
        
        // Get visual container
        const visualContainer = explainer.querySelector('.procedure-visual');
        if (!visualContainer) return;
        
        // Create visual layers for animation
        const layers = ['bone', 'gum', 'implant', 'crown', 'tooth'];
        let layersHTML = '';
        
        layers.forEach(layer => {
            layersHTML += `<div class="visual-layer ${layer}-layer"></div>`;
        });
        
        visualContainer.innerHTML = layersHTML;
        
        // Get steps
        const steps = stepsContainer.querySelectorAll('.procedure-step');
        
        // Initialize step navigation
        const stepNav = document.createElement('div');
        stepNav.className = 'step-navigation';
        
        let navHTML = '';
        steps.forEach((step, index) => {
            navHTML += `<button class="step-nav-btn ${index === 0 ? 'active' : ''}" data-step="${index + 1}">${index + 1}</button>`;
        });
        
        stepNav.innerHTML = navHTML;
        explainer.appendChild(stepNav);
        
        // Add interactivity
        const navButtons = stepNav.querySelectorAll('.step-nav-btn');
        
        // Show first step by default
        if (steps.length > 0) {
            steps[0].classList.add('active');
            updateVisual(visualContainer, 1);
        }
        
        // Add click handlers to navigation buttons
        navButtons.forEach(button => {
            button.addEventListener('click', function() {
                const stepNum = parseInt(this.getAttribute('data-step'));
                
                // Update active button
                navButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Update active step
                steps.forEach((step, index) => {
                    if (index + 1 === stepNum) {
                        step.classList.add('active');
                    } else {
                        step.classList.remove('active');
                    }
                });
                
                // Update visual
                updateVisual(visualContainer, stepNum);
            });
        });
        
        // Add auto-play feature
        const autoPlayBtn = document.createElement('button');
        autoPlayBtn.className = 'auto-play-btn';
        autoPlayBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Auto-Play';
        explainer.appendChild(autoPlayBtn);
        
        let autoPlayInterval;
        autoPlayBtn.addEventListener('click', function() {
            if (autoPlayInterval) {
                // Stop auto-play
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
                this.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Auto-Play';
            } else {
                // Start auto-play
                let currentStep = 1;
                autoPlayInterval = setInterval(() => {
                    currentStep++;
                    if (currentStep > steps.length) {
                        currentStep = 1;
                    }
                    
                    // Trigger click on the button
                    navButtons[currentStep - 1].click();
                }, 3000);
                
                this.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg> Pause';
            }
        });
    });
}

/**
 * Update dental procedure visual based on step
 * @param {HTMLElement} visualContainer - The visual container element
 * @param {number} stepNum - Current step number
 */
function updateVisual(visualContainer, stepNum) {
    // Reset all layers
    visualContainer.querySelectorAll('.visual-layer').forEach(layer => {
        layer.className = layer.className.replace(/ active| highlight/g, '');
    });
    
    // Customize visual based on step
    switch (stepNum) {
        case 1: // Initial examination
            visualContainer.querySelector('.bone-layer').classList.add('active');
            visualContainer.querySelector('.gum-layer').classList.add('active');
            visualContainer.querySelector('.tooth-layer').classList.add('active');
            break;
            
        case 2: // Tooth extraction (if needed)
            visualContainer.querySelector('.bone-layer').classList.add('active');
            visualContainer.querySelector('.gum-layer').classList.add('active');
            break;
            
        case 3: // Implant placement
            visualContainer.querySelector('.bone-layer').classList.add('active');
            visualContainer.querySelector('.gum-layer').classList.add('active');
            visualContainer.querySelector('.implant-layer').classList.add('active');
            visualContainer.querySelector('.implant-layer').classList.add('highlight');
            break;
            
        case 4: // Healing period
            visualContainer.querySelector('.bone-layer').classList.add('active');
            visualContainer.querySelector('.gum-layer').classList.add('active');
            visualContainer.querySelector('.implant-layer').classList.add('active');
            visualContainer.querySelector('.bone-layer').classList.add('highlight');
            break;
            
        case 5: // Crown placement
            visualContainer.querySelector('.bone-layer').classList.add('active');
            visualContainer.querySelector('.gum-layer').classList.add('active');
            visualContainer.querySelector('.implant-layer').classList.add('active');
            visualContainer.querySelector('.crown-layer').classList.add('active');
            visualContainer.querySelector('.crown-layer').classList.add('highlight');
            break;
    }
    
    // Add animation class
    visualContainer.classList.add('animating');
    setTimeout(() => {
        visualContainer.classList.remove('animating');
    }, 500);
}

/**
 * Specialist Finder
 * Location-based search for dental specialists
 */
function initSpecialistFinder() {
    const specialistFinder = document.querySelector('.specialist-search');
    if (!specialistFinder) return;
    
    const searchInput = specialistFinder.querySelector('input');
    const searchButton = specialistFinder.querySelector('button');
    
    if (!searchInput || !searchButton) return;
    
    // Add results container
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'specialist-results';
    resultsContainer.style.display = 'none';
    specialistFinder.after(resultsContainer);
    
    // Add map container
    const mapContainer = document.createElement('div');
    mapContainer.className = 'specialist-map';
    mapContainer.style.display = 'none';
    resultsContainer.after(mapContainer);
    
    // Handle search
    searchButton.addEventListener('click', () => {
        const location = searchInput.value.trim();
        if (!location) return;
        
        // Show loading state
        resultsContainer.innerHTML = '<div class="loading-spinner"></div>';
        resultsContainer.style.display = 'block';
        mapContainer.style.display = 'none';
        
        // Simulate API call with setTimeout (in a real implementation, this would be an actual API call)
        setTimeout(() => {
            // Sample specialists data (in a real implementation, this would come from the API)
            const specialists = [
                {
                    id: 'spec1',
                    name: 'Dr. Emily Chen',
                    specialty: 'Cosmetic Dentistry',
                    address: '123 Smile Avenue, ' + location,
                    rating: 4.9,
                    reviews: 127,
                    image: '/api/placeholder/80/80',
                    lat: 40.712776,
                    lng: -74.005974,
                    availability: ['Mon', 'Wed', 'Fri']
                },
                {
                    id: 'spec2',
                    name: 'Dr. James Wilson',
                    specialty: 'Implant Specialist',
                    address: '456 Dental Drive, ' + location,
                    rating: 4.8,
                    reviews: 94,
                    image: '/api/placeholder/80/80',
                    lat: 40.7112,
                    lng: -74.0123,
                    availability: ['Tue', 'Thu', 'Sat']
                },
                {
                    id: 'spec3',
                    name: 'Dr. Sarah Johnson',
                    specialty: 'Orthodontist',
                    address: '789 Bright Way, ' + location,
                    rating: 4.7,
                    reviews: 112,
                    image: '/api/placeholder/80/80',
                    lat: 40.7198,
                    lng: -74.0030,
                    availability: ['Mon', 'Tue', 'Thu', 'Fri']
                }
            ];
            
            // Generate results HTML
            let resultsHTML = `
                <div class="results-header">
                    <h3>Specialists Near ${location}</h3>
                    <div class="view-toggle">
                        <button class="view-list active" aria-label="List view">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                            </svg>
                        </button>
                        <button class="view-map" aria-label="Map view">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                                <line x1="8" y1="2" x2="8" y2="18"></line>
                                <line x1="16" y1="6" x2="16" y2="22"></line>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="specialists-list">
            `;
            
            specialists.forEach(specialist => {
                resultsHTML += `
                    <div class="specialist-card" data-id="${specialist.id}">
                        <div class="specialist-image">
                            <img src="${specialist.image}" alt="${specialist.name}">
                        </div>
                        <div class="specialist-info">
                            <h4>${specialist.name}</h4>
                            <div class="specialty">${specialist.specialty}</div>
                            <div class="address">${specialist.address}</div>
                            <div class="rating">
                                <span class="stars">${'★'.repeat(Math.floor(specialist.rating))}${specialist.rating % 1 >= 0.5 ? '½' : ''}</span>
                                <span class="rating-number">${specialist.rating}</span>
                                <span class="reviews">(${specialist.reviews} reviews)</span>
                            </div>
                            <div class="availability">
                                <strong>Available:</strong> ${specialist.availability.join(', ')}
                            </div>
                        </div>
                        <a href="#book-appointment" class="cta-button book-consult" data-specialist="${specialist.id}">Book Consultation</a>
                    </div>
                `;
            });
            
            resultsHTML += '</div>';
            
            // Display results
            resultsContainer.innerHTML = resultsHTML;
            
            // Initialize map view
            mapContainer.innerHTML = '<div id="specialist-map-canvas" style="width: 100%; height: 500px;"></div>';
            
            // Add animation
            const specialistCards = resultsContainer.querySelectorAll('.specialist-card');
            specialistCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 + (index * 150));
            });
            
            // Handle view toggle
            const viewListBtn = resultsContainer.querySelector('.view-list');
            const viewMapBtn = resultsContainer.querySelector('.view-map');
            
            viewListBtn.addEventListener('click', () => {
                viewListBtn.classList.add('active');
                viewMapBtn.classList.remove('active');
                resultsContainer.style.display = 'block';
                mapContainer.style.display = 'none';
            });
            
            viewMapBtn.addEventListener('click', () => {
                viewMapBtn.classList.add('active');
                viewListBtn.classList.remove('active');
                resultsContainer.style.display = 'none';
                mapContainer.style.display = 'block';
                
                // Initialize map (simulation - in real implementation, would use Google Maps or similar)
                const mapCanvas = document.getElementById('specialist-map-canvas');
                if (mapCanvas) {
                    // Placeholder for map initialization
                    mapCanvas.innerHTML = `
                        <div style="display: flex; justify-content: center; align-items: center; height: 100%; background-color: #f0f0f0; color: #333; text-align: center; padding: 20px;">
                            <div>
                                <h3>Interactive Map</h3>
                                <p>Map showing specialist locations near ${location}</p>
                                <p>In a real implementation, this would use Google Maps or a similar service.</p>
                                <div class="map-pins">
                                    ${specialists.map(spec => `<div class="map-pin" data-id="${spec.id}">${spec.name}</div>`).join('')}
                                </div>
                            </div>
                        </div>
                    `;
                }
            });
            
            // Handle booking buttons
            document.querySelectorAll('.book-consult').forEach(button => {
                button.addEventListener('click', e => {
                    e.preventDefault();
                    const specialistId = button.getAttribute('data-specialist');
                    const specialist = specialists.find(s => s.id === specialistId);
                    
                    if (specialist) {
                        openBookingModal(specialist);
                    }
                });
            });
        }, 1500);
    });
    
    // Add geolocation support
    if (navigator.geolocation) {
        const geoButton = document.createElement('button');
        geoButton.className = 'geo-button';
        geoButton.setAttribute('aria-label', 'Use my current location');
        geoButton.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>';
        
        searchInput.after(geoButton);
        
        geoButton.addEventListener('click', () => {
            geoButton.classList.add('loading');
            
            navigator.geolocation.getCurrentPosition(position => {
                // In a real implementation, we'd use the Geocoding API to get the city name
                // For this example, we'll just use placeholder text
                searchInput.value = 'Your Current Location';
                geoButton.classList.remove('loading');
                searchButton.click();
            }, error => {
                console.error('Geolocation error:', error);
                alert('Unable to get your location. Please enter it manually.');
                geoButton.classList.remove('loading');
            });
        });
    }
}

/**
 * Open booking modal for a specialist
 * @param {Object} specialist - Specialist data
 */
function openBookingModal(specialist) {
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'modal booking-modal';
    
    // Generate modal HTML
    const modalHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h3>Book a Consultation with ${specialist.name}</h3>
            </div>
            <div class="modal-body">
                <div class="specialist-brief">
                    <img src="${specialist.image}" alt="${specialist.name}">
                    <div>
                        <h4>${specialist.name}</h4>
                        <div>${specialist.specialty}</div>/**
 * The New Smile Guide - Interactive JavaScript
 * Version: 1.0
 * 
 * This script enhances The New Smile Guide website with smooth animations,
 * interactive elements, and performance optimizations to create an
 * award-winning user experience.
 */

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // --- DARK MODE TOGGLE ---
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark-mode');
    }
    if (themeToggle) {
        themeToggle.setAttribute('tabindex', '0');
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark-mode');
            const isDark = document.documentElement.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
        });
        themeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                themeToggle.click();
            }
        });
    }
    // --- HERO ANIMATION ---
    const heroText = document.querySelector('.animated-text');
    if (heroText) {
        heroText.style.opacity = 0;
        heroText.style.transform = 'translateY(40px)';
        setTimeout(() => {
            heroText.style.transition = 'opacity 1s cubic-bezier(.6,.05,.1,1), transform 1s cubic-bezier(.6,.05,.1,1)';
            heroText.style.opacity = 1;
            heroText.style.transform = 'translateY(0)';
        }, 500);
    }
    // --- CTA BUTTON MICROINTERACTION ---
    document.querySelectorAll('.cta-button').forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.97)';
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = '';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
    // --- TESTIMONIALS CAROUSEL ---
    // --- SMILE QUIZ LOGIC ---
    const quiz = document.querySelector('.smile-quiz');
    if (quiz) {
        const steps = Array.from(quiz.querySelectorAll('.quiz-step'));
        const options = quiz.querySelectorAll('.quiz-option');
        const progressBar = quiz.querySelector('.quiz-progress-bar');
        const resultDiv = quiz.querySelector('.quiz-result');
        const restartBtn = quiz.querySelector('.quiz-restart');
        let step = 0;
        let answers = [];
        function showStep(n) {
            steps.forEach((s, i) => s.classList.toggle('active', i === n));
            progressBar.style.width = ((n) / (steps.length - 1)) * 100 + '%';
            if (n === steps.length - 1) {
                // Simple recommendation logic
                let rec = 'Consult with a dental specialist for a personalized plan.';
                if (answers[0] === 'whiter') rec = 'Try professional whitening or veneers.';
                if (answers[0] === 'straighter') rec = 'Consider clear aligners or braces.';
                if (answers[0] === 'replace') rec = 'Dental implants or bridges may be ideal.';
                if (answers[0] === 'repair') rec = 'Bonding or veneers can repair chips.';
                resultDiv.textContent = rec;
                resultDiv.focus();
            }
        }
        options.forEach(btn => {
            btn.addEventListener('click', () => {
                const currentStep = steps.findIndex(s => s.classList.contains('active'));
                if (currentStep < steps.length - 2) {
                    answers[currentStep] = btn.getAttribute('data-value');
                    showStep(currentStep + 1);
                } else if (currentStep === steps.length - 2) {
                    answers[currentStep] = btn.getAttribute('data-value');
                    showStep(currentStep + 1);
                }
            });
        });
        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                step = 0;
                answers = [];
                showStep(0);
            });
        }
        showStep(0);
    }
    // --- BEFORE/AFTER SLIDER LOGIC ---
    const baSlider = document.querySelector('.before-after-slider');
    if (baSlider) {
        const afterImg = baSlider.querySelector('.after-img');
        const slider = baSlider.querySelector('.slider');
        slider.addEventListener('input', () => {
            const val = slider.value;
            afterImg.style.clipPath = `inset(0 ${100-val}% 0 0)`;
        });
        // Initialize position
        afterImg.style.clipPath = 'inset(0 50% 0 0)';
    }
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const track = carousel.querySelector('.carousel-track');
        const cards = Array.from(track.querySelectorAll('.testimonial-card'));
        const left = carousel.querySelector('.carousel-arrow-left');
        const right = carousel.querySelector('.carousel-arrow-right');
        let current = 0;
        function showCard(idx) {
            cards.forEach((card, i) => {
                card.classList.toggle('active', i === idx);
                if (i === idx) card.setAttribute('aria-live', 'polite');
                else card.removeAttribute('aria-live');
            });
            track.focus();
        }
        left.addEventListener('click', () => {
            current = (current - 1 + cards.length) % cards.length;
            showCard(current);
        });
        right.addEventListener('click', () => {
            current = (current + 1) % cards.length;
            showCard(current);
        });
        track.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft') {
                left.click();
            } else if (e.key === 'ArrowRight') {
                right.click();
            }
        });
        showCard(current);
    }
    // Initialize all components
    initPreloader();
    initScrollEffects();
    initAnimations();
    initInteractiveElements();
    initAccessibilityFeatures();
    initPerformanceOptimizations();
    // Initialize specialized features
    initSmileJourneyQuiz();
    initBeforeAfterSlider();
    initDentalProcedureExplainer();
    initSpecialistFinder();
    initCostEstimator();
    initAppointmentBooking();
    initProgressiveWebAppFeatures();
});

/**
 * Preloader Animation
 * Displays an elegant loading animation until the page is fully loaded
 */
function initPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = '<div class="loader"></div>';
    document.body.prepend(preloader);

    // Hide preloader once page is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            // Remove preloader from DOM after animation completes
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 800);
    });
}

/**
 * Scroll Effects
 * Handles scroll-triggered animations and effects
 */
function initScrollEffects() {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll('.scroll-animation, [data-aos]');
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    // Scroll to top button
    const scrollTopBtn = document.createElement('div');
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    document.body.appendChild(scrollTopBtn);
    
    // Handle scroll events
    window.addEventListener('scroll', throttle(() => {
        // Header shrink effect
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Scroll to top button visibility
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
        
        // Reveal elements when scrolled into view
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('aos-animate');
                element.classList.add('visible');
            }
        });
    }, 100));
    
    // Scroll to top button click handler
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Animations
 * Sets up various animations and effects throughout the site
 */
function initAnimations() {
    // Hero text typing effect
    const heroText = document.querySelector('.hero-text h1');
    if (heroText) {
        const originalText = heroText.textContent;
        heroText.innerHTML = '';
        heroText.classList.add('typing-effect');
        
        // Animated text reveal
        setTimeout(() => {
            heroText.textContent = originalText;
            heroText.classList.remove('typing-effect');
            heroText.classList.add('reveal-text');
            heroText.innerHTML = `<span>${originalText}</span>`;
        }, 1000);
    }
    
    // Staggered animation for navigation items
    const navItems = document.querySelectorAll('nav ul li');
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', throttle(() => {
            const scrollPosition = window.scrollY;
            const heroHeight = hero.offsetHeight;
            const parallaxSpeed = 0.4;
            
            if (scrollPosition <= heroHeight) {
                const translateY = scrollPosition * parallaxSpeed;
                hero.style.backgroundPositionY = `${translateY}px`;
            }
        }, 10));
    }
    
    // Breathe animation for cards
    document.querySelectorAll('.story-card, .option-button').forEach(item => {
        item.classList.add('breathe');
    });
    
    // Initialize logo animation
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.classList.add('sizzle');
        });
        
        logo.addEventListener('mouseleave', () => {
            setTimeout(() => {
                logo.classList.remove('sizzle');
            }, 500);
        });
    }
    
    // Add animated counters for statistics
    initCounterAnimation();
}

/**
 * Counter Animation
 * Animates numerical statistics when they come into view
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        counter.innerText = '0';
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate the counter
                    let count = 0;
                    const duration = 2000; // 2 seconds
                    const stepTime = Math.abs(Math.floor(duration / target));
                    
                    const timer = setInterval(() => {
                        count += 1;
                        counter.innerText = count;
                        
                        if (count === target) {
                            clearInterval(timer);
                        }
                    }, stepTime);
                    
                    // Unobserve after animation starts
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
}

/**
 * Interactive Elements
 * Sets up interactive components like tabs, accordions, tooltips
 */
function initInteractiveElements() {
    // Initialize tabs
    initTabs();
    
    // Initialize accordions
    initAccordions();
    
    // Initialize tooltips
    initTooltips();
    
    // Initialize 3D card effects
    init3DCards();
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Add ripple effect to buttons
    document.querySelectorAll('.cta-button, .option-button').forEach(button => {
        button.classList.add('ripple-effect');
    });
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize theme switcher
    initThemeSwitcher();
}

/**
 * Tabs Component
 * Creates interactive tabbed content areas
 */
function initTabs() {
    document.querySelectorAll('.tabs').forEach(tabsContainer => {
        const tabButtons = tabsContainer.querySelectorAll('.tab-button');
        const tabContents = tabsContainer.querySelectorAll('.tab-content');
        
        // Set first tab as active by default
        if (tabButtons.length > 0) {
            tabButtons[0].classList.add('active');
        }
        
        if (tabContents.length > 0) {
            tabContents[0].classList.add('active');
        }
        
        // Add click event listeners to tab buttons
        tabButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to current button and content
                button.classList.add('active');
                if (tabContents[index]) {
                    tabContents[index].classList.add('active');
                }
            });
        });
    });
}

/**
 * Accordions Component
 * Creates collapsible content sections
 */
function initAccordions() {
    document.querySelectorAll('.accordion').forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        const content = accordion.querySelector('.accordion-content');
        
        if (header && content) {
            header.addEventListener('click', () => {
                accordion.classList.toggle('active');
                
                if (accordion.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = '0';
                }
            });
        }
    });
}

/**
 * Tooltips Component
 * Adds informational tooltips to elements
 */
function initTooltips() {
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        const tooltipText = element.getAttribute('data-tooltip');
        
        // Create tooltip element
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip-text';
        tooltip.textContent = tooltipText;
        
        // Add tooltip element to container
        element.classList.add('tooltip');
        element.appendChild(tooltip);
    });
}

/**
 * 3D Card Effects
 * Adds interactive 3D tilt effects to cards
 */
function init3DCards() {
    document.querySelectorAll('.card-3d').forEach(card => {
        card.addEventListener('mousemove', e => {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            
            // Calculate mouse position relative to card center
            const mouseX = e.clientX - cardCenterX;
            const mouseY = e.clientY - cardCenterY;
            
            // Calculate rotation values (limited to ±15 degrees)
            const rotateY = mouseX * 0.03;
            const rotateX = -mouseY * 0.03;
            
            // Apply transform
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        // Reset transform on mouse leave
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

/**
 * Custom Cursor
 * Creates a custom cursor that follows mouse movement
 */
function initCustomCursor() {
    // Create custom cursor element
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    // Update cursor position on mouse move
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add active class on mouse down
    document.addEventListener('mousedown', () => {
        cursor.classList.add('active');
    });
    
    // Remove active class on mouse up
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('active');
    });
    
    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    // Show cursor when mouse enters window
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '0.5';
    });
    
    // Change cursor appearance when hovering over links and buttons
    document.querySelectorAll('a, button, .option-button, .cta-button').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
}

/**
 * Mobile Menu
 * Creates a responsive mobile navigation menu
 */
function initMobileMenu() {
    const navContainer = document.querySelector('.nav-container');
    const nav = document.querySelector('nav');
    
    if (navContainer && nav) {
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        
        // Create mobile nav container
        const mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-nav';
        mobileNav.appendChild(nav.cloneNode(true));
        
        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.className = 'mobile-menu-close';
        closeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
        mobileNav.prepend(closeBtn);
        
        // Append elements to DOM
        navContainer.appendChild(mobileMenuBtn);
        document.body.appendChild(mobileNav);
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
        
        // Close mobile menu
        closeBtn.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        });
        
        // Close menu when clicking on mobile nav links
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', e => {
            if (!mobileNav.contains(e.target) && e.target !== mobileMenuBtn) {
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }
}

/**
 * Theme Switcher
 * Allows users to toggle between light and dark themes
 */
function initThemeSwitcher() {
    // Create theme switch button
    const themeSwitch = document.createElement('div');
    themeSwitch.className = 'theme-switch';
    themeSwitch.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    document.body.appendChild(themeSwitch);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeSwitch.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    }
    
    // Toggle theme on button click
    themeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Update icon and save preference
        if (document.body.classList.contains('dark-theme')) {
            themeSwitch.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeSwitch.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
            localStorage.setItem('theme', 'light');
        }
    });
}

/**
 * Accessibility Features
 * Improves site accessibility for all users
 */
function initAccessibilityFeatures() {
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.className = 'skip-link';
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to content';
    document.body.prepend(skipLink);
    
    // Add ARIA labels to interactive elements without text
    document.querySelectorAll('button:not([aria-label]):not([title])').forEach(button => {
        if (!button.textContent.trim()) {
            button.setAttribute('aria-label', 'Button');
        }
    });
    
    // Add focus trap for modal dialogs
    document.querySelectorAll('.modal').forEach(modal => {
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        modal.addEventListener('keydown', e => {
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        });
    });
    
    // Add font size adjustment feature
    const fontSizeAdjuster = document.createElement('div');
    fontSizeAdjuster.className = 'font-size-adjuster';
    fontSizeAdjuster.innerHTML = `
        <button class="font-size-btn decrease" aria-label="Decrease font size">A-</button>
        <button class="font-size-btn reset" aria-label="Reset font size">A</button>
        <button class="font-size-btn increase" aria-label="Increase font size">A+</button>
    `;
    
    const currentFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    
    fontSizeAdjuster.querySelector('.decrease').addEventListener('click', () => {
        document.documentElement.style.fontSize = (currentFontSize * 0.9) + 'px';
        localStorage.setItem('fontSize', document.documentElement.style.fontSize);
    });
    
    fontSizeAdjuster.querySelector('.reset').addEventListener('click', () => {
        document.documentElement.style.fontSize = currentFontSize + 'px';
        localStorage.removeItem('fontSize');
    });
    
    fontSizeAdjuster.querySelector('.increase').addEventListener('click', () => {
        document.documentElement.style.fontSize = (currentFontSize * 1.1) + 'px';
        localStorage.setItem('fontSize', document.documentElement.style.fontSize);
    });
    
    // Apply saved font size
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        document.documentElement.style.fontSize = savedFontSize;
    }
    
    // High contrast mode toggle
    const contrastToggle = document.createElement('button');
    contrastToggle.className = 'contrast-toggle';
    contrastToggle.setAttribute('aria-label', 'Toggle high contrast mode');
    contrastToggle.innerHTML = 'Aa';
    
    contrastToggle.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        localStorage.setItem('highContrast', document.body.classList.contains('high-contrast'));
    });
    
    // Apply saved contrast setting
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
    
    // Add accessibility toolbar
    const accessibilityBar = document.createElement('div');
    accessibilityBar.className = 'accessibility-bar';
    accessibilityBar.appendChild(fontSizeAdjuster);
    accessibilityBar.appendChild(contrastToggle);
    
    // Add accessibility toggle button
    const accessibilityToggle = document.createElement('button');
    accessibilityToggle.className = 'accessibility-toggle';
    accessibilityToggle.setAttribute('aria-label', 'Accessibility options');
    accessibilityToggle.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>';
    
    accessibilityToggle.addEventListener('click', () => {
        accessibilityBar.classList.toggle('open');
    });
    
    // Append accessibility features to body
    document.body.appendChild(accessibilityBar);
    document.body.appendChild(accessibilityToggle);
}

/**
 * Performance Optimizations
 * Improves site performance and loading speed
 */
function initPerformanceOptimizations() {
    // Lazy load images
    lazyLoadImages();
    
    // Defer non-critical resources
    deferNonCriticalResources();
    
    // Implement content caching
    implementCaching();
}

/**
 * Lazy Load Images
 * Loads images only when they come into viewport
 */
function lazyLoadImages() {
    // Create IntersectionObserver if supported
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            // Add placeholder wrapper
            const wrapper = document.createElement('div');
            wrapper.className = 'lazy-image';
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
            
            // Add placeholder animation
            const placeholder = document.createElement('div');
            placeholder.className = 'placeholder';
            wrapper.appendChild(placeholder);
            
            // Observe image
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
        });
    }
}

/**
 * Defer Non-Critical Resources
 * Delays loading of non-essential resources
 */
function deferNonCriticalResources() {
    // Find all script tags with data-defer attribute
    document.querySelectorAll('script[data-defer]').forEach(script => {
        const src = script.getAttribute('src');
        
        if (src) {
            // Create new script element with defer attribute
            const deferredScript = document.createElement('script');
            deferredScript.src = src;
            deferredScript.defer = true;
            
            // Replace original script with deferred version
            script.parentNode.replaceChild(deferredScript, script);
        }
    });
}

/**
 * Implement Caching
 * Implements content caching for faster repeat visits
 */
function implementCaching() {
    // Register service worker if supported
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
        });
    }
}

/**
 * Smile Journey Quiz
 * Interactive questionnaire to guide users to appropriate treatments
 */
function initSmileJourneyQuiz() {
    const quizContainer = document.querySelector('#smile-journey-quiz');
    if (!quizContainer) return;
    
    const questions = [
        {
            id: 'concern',
            text: 'What is your main smile concern?',
            options: [
                { value: 'missing', text: 'Missing teeth' },
                { value: 'crooked', text: 'Crooked teeth' },
                { value: 'discolored', text: 'Discolored teeth' },
                { value: 'damaged', text: 'Chipped or damaged teeth' },
                { value: 'gummy', text: 'Gummy smile' }
            ]
        },
        {
            id: 'timeline',
            text: 'What is your ideal timeline for treatment?',
            options: [
                { value: 'immediate', text: 'As soon as possible (days/weeks)' },
                { value: 'medium', text: 'Medium term (2-6 months)' },
                { value: 'longterm', text: 'I\'m comfortable with longer treatment (6+ months)' }
            ]
        },
        {
            id: 'budget',
            text: 'What is your budget range?',
            options: [
                { value: 'economy', text: 'Economy ($1,000-$3,000)' },
                { value: 'standard', text: 'Standard ($3,000-$8,000)' },
                { value: 'premium', text: 'Premium ($8,000+)' }
            ]
        }
    ];
    
    // Generate quiz HTML
    let quizHTML = '<div class="quiz-container">';
    quizHTML += '<h2>Discover Your Ideal Smile Journey</h2>';
    
    questions.forEach((question, qIndex) => {
        quizHTML += `
            <div class="quiz-step" data-step="${qIndex + 1}" ${qIndex > 0 ? 'style="display: none;"' : ''}>
                <h3>${question.text}</h3>
                <div class="options-grid quiz-options">
        `;
        
        question.options.forEach(option => {
            quizHTML += `
                <div class="option-button quiz-option" data-question="${question.id}" data-value="${option.value}">
                    ${option.text}
                </div>
            `;
        });
        
        quizHTML += `
                </div>
                <div class="quiz-navigation">
                    ${qIndex > 0 ? '<button class="quiz-prev">Previous</button>' : ''}
                    ${qIndex < questions.length - 1 ? '' : '<button class="quiz-submit">Get Results</button>'}
                </div>
            </div>
        `;
    });
    
    // Add results container
    quizHTML += `
        <div class="quiz-results" style="display: none;">
            <h3>Your