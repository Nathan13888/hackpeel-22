import { useEffect, useRef, useState } from 'react';

export function useInterval(callback, delay) {
	const savedCallback = useRef();
	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

export function useScroll(ref, callback) {
	// Remember the latest callback.
	const origRef = useRef();
	const scrollticking = useRef(false);
	useEffect(() => {
		console.log(ref);
		if (!ref.current) return;
		origRef.current = ref.current;
		function tryTick() {
			if (!scrollticking.current) {
				window.requestAnimationFrame(() => {
				  callback();
				  scrollticking.current = false;
				});
				scrollticking.current = true;
			  }
		}
		origRef.current.addEventListener('scroll', tryTick, { passive: true });
    	return () => {
			origRef.current.removeEventListener('scroll', tryTick);
		};
	}, []);
}