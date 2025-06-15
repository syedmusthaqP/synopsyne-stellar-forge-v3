"use client";

import React, {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ArrowLeft, ArrowRight, Quote, X} from "lucide-react";
import {cn} from "@/lib/utils";

// ===== Types and Interfaces =====
export interface iTestimonial {
	name: string;
	designation: string;
	description: string;
	profileImage: string;
}

interface iCarouselProps {
	items: React.ReactElement<{
		testimonial: iTestimonial;
		index: number;
		layout?: boolean;
		onCardClose: () => void;
	}>[];
	initialScroll?: number;
}

// ===== Custom Hooks =====
const useOutsideClick = (
	ref: React.RefObject<HTMLDivElement | null>,
	onOutsideClick: () => void,
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent | TouchEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			onOutsideClick();
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("touchstart", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("touchstart", handleClickOutside);
		};
	}, [ref, onOutsideClick]);
};

// ===== Components =====
const Carousel = ({items, initialScroll = 0}: iCarouselProps) => {
	const carouselRef = React.useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = React.useState(false);
	const [canScrollRight, setCanScrollRight] = React.useState(true);

	const checkScrollability = () => {
		if (carouselRef.current) {
			const {scrollLeft, scrollWidth, clientWidth} = carouselRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
		}
	};

	const handleScrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({left: -300, behavior: "smooth"});
		}
	};

	const handleScrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({left: 300, behavior: "smooth"});
		}
	};

	const handleCardClose = (index: number) => {
		if (carouselRef.current) {
			const cardWidth = isMobile() ? 230 : 384;
			const gap = isMobile() ? 4 : 8;
			const scrollPosition = (cardWidth + gap) * (index + 1);
			carouselRef.current.scrollTo({
				left: scrollPosition,
				behavior: "smooth",
			});
		}
	};

	const isMobile = () => {
		return window && window.innerWidth < 768;
	};

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollLeft = initialScroll;
			checkScrollability();
		}
	}, [initialScroll]);

	// Add scroll event listener to update button states
	useEffect(() => {
		const carousel = carouselRef.current;
		if (carousel) {
			carousel.addEventListener('scroll', checkScrollability);
			return () => carousel.removeEventListener('scroll', checkScrollability);
		}
	}, []);

	return (
		<div className="relative w-full mt-10">
			<div
				className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-5"
				ref={carouselRef}
			>
				<div
					className={cn(
						"absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
					)}
				/>
				<div
					className={cn(
						"flex flex-row justify-start gap-4 pl-3",
						"max-w-5xl mx-auto",
					)}
				>
					{items.map((item, index) => {
						return (
							<motion.div
								initial={{opacity: 0, y: 20}}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.5,
										delay: 0.2 * index,
										ease: "easeOut",
										once: true,
									},
								}}
								key={`card-${index}`}
								className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
							>
								{React.cloneElement(item, {
									onCardClose: () => {
										return handleCardClose(index);
									},
								})}
							</motion.div>
						);
					})}
				</div>
			</div>
			<div className="flex justify-end gap-2 mt-4">
				<button
					className="relative z-40 h-10 w-10 rounded-full bg-cyan-500/20 glassmorphism neon-border flex items-center justify-center disabled:opacity-50 hover:bg-cyan-500/30 transition-colors duration-200"
					onClick={handleScrollLeft}
					disabled={!canScrollLeft}
				>
					<ArrowLeft className="h-6 w-6 text-cyan-400" />
				</button>
				<button
					className="relative z-40 h-10 w-10 rounded-full bg-cyan-500/20 glassmorphism neon-border flex items-center justify-center disabled:opacity-50 hover:bg-cyan-500/30 transition-colors duration-200"
					onClick={handleScrollRight}
					disabled={!canScrollRight}
				>
					<ArrowRight className="h-6 w-6 text-cyan-400" />
				</button>
			</div>
		</div>
	);
};

const TestimonialCard = ({
	testimonial,
	index,
	layout = false,
	onCardClose = () => {},
	backgroundImage = "https://images.unsplash.com/photo-1528458965990-428de4b1cb0d?q=80&w=3129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}: {
	testimonial: iTestimonial;
	index: number;
	layout?: boolean;
	onCardClose?: () => void;
	backgroundImage?: string;
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleExpand = () => {
		return setIsExpanded(true);
	};
	const handleCollapse = () => {
		setIsExpanded(false);
		onCardClose();
	};

	useEffect(() => {
		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				handleCollapse();
			}
		};

		if (isExpanded) {
			const scrollY = window.scrollY;
			document.body.style.position = "fixed";
			document.body.style.top = `-${scrollY}px`;
			document.body.style.width = "100%";
			document.body.style.overflow = "hidden";
			document.body.dataset.scrollY = scrollY.toString();
		} else {
			const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
			document.body.style.position = "";
			document.body.style.top = "";
			document.body.style.width = "";
			document.body.style.overflow = "";
			window.scrollTo({top: scrollY, behavior: "instant"});
		}

		window.addEventListener("keydown", handleEscapeKey);
		return () => {
			return window.removeEventListener("keydown", handleEscapeKey);
		};
	}, [isExpanded]);

	useOutsideClick(containerRef, handleCollapse);

	return (
		<>
			<AnimatePresence>
				{isExpanded && (
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							className="bg-black/50 backdrop-blur-lg absolute inset-0"
						/>
						<motion.div
							initial={{opacity: 0, scale: 0.95}}
							animate={{opacity: 1, scale: 1}}
							exit={{opacity: 0, scale: 0.95}}
							ref={containerRef}
							layoutId={layout ? `card-${testimonial.name}` : undefined}
							className="relative max-w-2xl w-full max-h-[80vh] bg-gradient-to-b from-gray-900/95 to-black/95 glassmorphism rounded-3xl overflow-y-auto neon-border z-60"
						>
							<div className="p-6 md:p-8">
								<button
									className="absolute top-4 right-4 h-8 w-8 rounded-full flex items-center justify-center bg-cyan-500/20 neon-border hover:bg-cyan-500/30 transition-colors"
									onClick={handleCollapse}
								>
									<X className="h-5 w-5 text-cyan-400" />
								</button>
								
								<motion.p
									layoutId={layout ? `category-${testimonial.name}` : undefined}
									className="text-cyan-400 text-sm md:text-base font-thin underline underline-offset-4 mb-4"
								>
									{testimonial.designation}
								</motion.p>
								
								<motion.p
									layoutId={layout ? `title-${testimonial.name}` : undefined}
									className="text-xl md:text-2xl font-normal italic text-white mb-6 lowercase"
								>
									{testimonial.name}
								</motion.p>
								
								<div className="text-gray-300 text-base md:text-lg font-thin leading-relaxed">
									<Quote className="h-5 w-5 text-cyan-400 mb-3" />
									{testimonial.description}
								</div>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
			<motion.button
				layoutId={layout ? `card-${testimonial.name}` : undefined}
				onClick={handleExpand}
				className=""
				whileHover={{
					rotateX: 2,
					rotateY: 2,
					rotate: 3,
					scale: 1.02,
					transition: {duration: 0.3, ease: "easeOut"},
				}}
			>
				<div
					className={`${index % 2 === 0 ? "rotate-0" : "-rotate-0"} rounded-3xl glassmorphism h-[500px] md:h-[550px] w-80 md:w-96 overflow-hidden flex flex-col items-center justify-center relative z-10 shadow-md neon-border`}
				>
					<div className="absolute opacity-20" style={{inset: "-1px 0 0"}}>
						<div className="absolute inset-0">
							<img
								className="block w-full h-full object-center object-cover"
								src={backgroundImage}
								alt="Background layer"
								style={{objectFit: 'cover'}}
							/>
						</div>
					</div>
					<ProfileImage src={testimonial.profileImage} alt={testimonial.name} />
					<motion.p
						layoutId={layout ? `title-${testimonial.name}` : undefined}
						className="text-gray-300 text-2xl md:text-2xl font-normal text-center [text-wrap:balance] mt-4 lowercase px-3"
					>
						{testimonial.description.length > 100
							? `${testimonial.description.slice(0, 100)}...`
							: testimonial.description}
					</motion.p>
					<motion.p
						layoutId={layout ? `category-${testimonial.name}` : undefined}
						className="text-cyan-400 text-xl md:text-2xl font-thin italic text-center mt-5 lowercase"
					>
						{testimonial.name}.
					</motion.p>
					<motion.p
						layoutId={layout ? `category-${testimonial.name}` : undefined}
						className="text-gray-400 text-base md:text-base font-thin italic text-center mt-1 lowercase underline underline-offset-8 decoration-1"
					>
						{testimonial.designation.length > 25
							? `${testimonial.designation.slice(0, 25)}...`
							: testimonial.designation}
					</motion.p>
				</div>
			</motion.button>
		</>
	);
};

const ProfileImage = ({src, alt, ...rest}: {src: string; alt: string; className?: string}) => {
	const [isLoading, setLoading] = useState(true);

	return (
		<div className="w-[90px] h-[90px] md:w-[150px] md:h-[150px] opacity-80 overflow-hidden rounded-[1000px] border-[3px] border-solid border-cyan-400/60 aspect-[1/1] flex-none saturate-[0.2] sepia-[0.46] relative">
			<img
				className={cn(
					"transition duration-300 absolute top-0 inset-0 rounded-inherit object-cover z-50",
					isLoading ? "blur-sm" : "blur-0",
				)}
				onLoad={() => {
					return setLoading(false);
				}}
				src={src}
				width={150}
				height={150}
				loading="lazy"
				decoding="async"
				alt={alt || "Profile image"}
				{...rest}
			/>
		</div>
	);
};

// Export the components
export {Carousel, TestimonialCard, ProfileImage};
