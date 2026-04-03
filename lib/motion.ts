export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.15 }
    }
};

export const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE_PREMIUM } }
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.85, ease: EASE_PREMIUM } }
};

export const imageReveal = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: EASE_PREMIUM } }
};
