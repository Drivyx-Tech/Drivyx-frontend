"use client";

import React, {
  useLayoutEffect,
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react";

import {
  useMediaQuery,
  useTheme,
  Progress,
  VStack,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Utiles } from "@/services/utils";
import { useBoundingRect } from "@/services/hooks";

const MotionFlex = motion(Flex);

const transitionProps = {
  stiffness: 400,
  type: "spring",
  damping: 60,
  mass: 3,
};

type Props = {
  children: React.ReactNode[];
  gap: number;
};

type SliderProps = {
  setTrackIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  initSliderWidth: (width: number) => void;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  activeItem: number;
  constraint: number;
  itemWidth: number;
  positions: number[];
  gap: number;
  children?: React.ReactNode;
};

type TrackProps = {
  setTrackIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  trackIsActive: boolean;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  sliderWidth: number;
  activeItem: number;
  constraint: number;
  multiplier: number;
  itemWidth: number;
  positions: number[];
  gap: number;
  children?: React.ReactNode;
};

type ItemProps = {
  setTrackIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  trackIsActive: boolean;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  activeItem: number;
  constraint: number;
  itemWidth: number;
  positions: number[];
  gap: number;
  children?: React.ReactNode;
};

const ChakraCarousel = ({ children, gap }: Props) => {
  const [trackIsActive, setTrackIsActive] = useState(false);
  const [multiplier, setMultiplier] = useState(0.35);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [constraint, setConstraint] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  const initSliderWidth = useCallback(
    (width: number) => setSliderWidth(width),
    []
  );

  const positions = useMemo(
    () =>
      children.map(
        (_: any, index: number) => -Math.abs((itemWidth + gap) * index)
      ),
    [children, itemWidth, gap]
  );

  const { breakpoints } = useTheme();

  const [isBetweenBaseAndMd] = useMediaQuery(
    `(min-width: ${breakpoints.base}) and (max-width: ${breakpoints.md})`
  );

  const [isBetweenMdAndXl] = useMediaQuery(
    `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl})`
  );

  const [isGreaterThanXL] = useMediaQuery(`(min-width: ${breakpoints.xl})`);

  useEffect(() => {
    if (isBetweenBaseAndMd) {
      setItemWidth(sliderWidth - gap);
      setMultiplier(0.65);
      setConstraint(1);
    }
    if (isBetweenMdAndXl) {
      setItemWidth(sliderWidth / 2 - gap);
      setMultiplier(0.5);
      setConstraint(2);
    }
    if (isGreaterThanXL) {
      setItemWidth(sliderWidth / 3 - gap);
      setMultiplier(0.35);
      setConstraint(3);
    }
  }, [isBetweenBaseAndMd, isBetweenMdAndXl, isGreaterThanXL, sliderWidth, gap]);

  // useEffect(() => {
  //   let maxVisibleSlides = 2; // Set the maximum number of visible slides
  //   if (isBetweenBaseAndMd) {
  //     maxVisibleSlides = 1; // Adjust for smaller screens if needed
  //   }

  //   if (isBetweenBaseAndMd || isBetweenMdAndXl || isGreaterThanXL) {
  //     setItemWidth(sliderWidth / maxVisibleSlides - gap);
  //     setMultiplier(1 / maxVisibleSlides);
  //     setConstraint(maxVisibleSlides);
  //   }
  // }, [isBetweenBaseAndMd, isBetweenMdAndXl, isGreaterThanXL, sliderWidth, gap]);

  const sliderProps: SliderProps = {
    setTrackIsActive,
    initSliderWidth,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    gap,
  };

  const trackProps: TrackProps = {
    setTrackIsActive,
    trackIsActive,
    setActiveItem,
    sliderWidth,
    activeItem,
    constraint,
    multiplier,
    itemWidth,
    positions,
    gap,
  };

  const itemProps: ItemProps = {
    setTrackIsActive,
    trackIsActive,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    gap,
  };

  return (
    <Slider {...sliderProps}>
      <Track {...trackProps}>
        {children.map((child: any, index: number) => (
          <Item {...itemProps} index={index} key={index}>
            {child}
          </Item>
        ))}
      </Track>
    </Slider>
  );
};

const Slider = ({
  setTrackIsActive,
  initSliderWidth,
  setActiveItem,
  activeItem,
  constraint,
  itemWidth,
  positions,
  children,
  gap,
}: SliderProps) => {
  const [ref, { width }] = useBoundingRect() as any;

  useLayoutEffect(
    () => initSliderWidth(Math.round(width)),
    [width, initSliderWidth]
  );

  const handleFocus = () => setTrackIsActive(true);

  const handleDecrementClick = () => {
    setTrackIsActive(true);
    !(activeItem === positions.length - positions.length) &&
      setActiveItem((prev: number) => prev - 1);
  };

  const handleIncrementClick = () => {
    setTrackIsActive(true);
    !(activeItem === positions.length - constraint) &&
      setActiveItem((prev: number) => prev + 1);
  };

  return (
    <>
      <Box
        ref={ref}
        w={{ base: "100%", md: `calc(100% + ${gap}px)` }}
        ml={{ base: 0, md: `-${gap / 2}px` }}
        px={`${gap / 2}px`}
        position="relative"
        overflow="hidden"
        _before={{
          bgGradient: "linear(to-r, base.d400, transparent)",
          position: "absolute",
          w: `${gap / 2}px`,
          content: "''",
          zIndex: 1,
          h: "100%",
          left: 0,
          top: 0,
        }}
        _after={{
          bgGradient: "linear(to-l, base.d400, transparent)",
          position: "absolute",
          w: `${gap / 2}px`,
          content: "''",
          zIndex: 1,
          h: "100%",
          right: 0,
          top: 0,
        }}
      >
        {children}
      </Box>

      <Flex w={`${itemWidth}px`} mt={`${gap / 2}px`} mx="auto">
        <Button
          onClick={handleDecrementClick}
          onFocus={handleFocus}
          mr={`${gap / 3}px`}
          color="gray.200"
          variant="link"
          minW={0}
        >
          <ChevronLeftIcon boxSize={9} />
        </Button>

        <Progress
          value={Utiles.percentage(activeItem, positions.length - constraint)}
          alignSelf="center"
          borderRadius="2px"
          bg="base.d100"
          flex={1}
          h="3px"
          sx={{
            "> div": {
              backgroundColor: "gray.400",
            },
          }}
        />

        <Button
          onClick={handleIncrementClick}
          onFocus={handleFocus}
          ml={`${gap / 3}px`}
          color="gray.200"
          variant="link"
          zIndex={2}
          minW={0}
        >
          <ChevronRightIcon boxSize={9} />
        </Button>
      </Flex>
    </>
  );
};

const Track = ({
  setTrackIsActive,
  trackIsActive,
  setActiveItem,
  activeItem,
  constraint,
  multiplier,
  itemWidth,
  positions,
  children,
}: TrackProps) => {
  const [dragStartPosition, setDragStartPosition] = useState(0);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const node = useRef<any>();

  const handleDragStart = () => setDragStartPosition(positions[activeItem]);

  const handleDragEnd = (_: any, info: any) => {
    const distance = info.offset.x;
    const velocity = info.velocity.x * multiplier;
    const direction = velocity < 0 || distance < 0 ? 1 : -1;

    const extrapolatedPosition =
      dragStartPosition +
      (direction === 1
        ? Math.min(velocity, distance)
        : Math.max(velocity, distance));

    const closestPosition = positions.reduce((prev: any, curr: any) => {
      return Math.abs(curr - extrapolatedPosition) <
        Math.abs(prev - extrapolatedPosition)
        ? curr
        : prev;
    }, 0);

    if (!(closestPosition < positions[positions.length - constraint])) {
      setActiveItem(positions.indexOf(closestPosition));
      controls.start({
        x: closestPosition,
        transition: {
          velocity: info.velocity.x,
          ...transitionProps,
        },
      });
    } else {
      setActiveItem(positions.length - constraint);
      controls.start({
        x: positions[positions.length - constraint],
        transition: {
          velocity: info.velocity.x,
          ...transitionProps,
        },
      });
    }
  };

  const handleResize = useCallback(
    () =>
      controls.start({
        x: positions[activeItem],
        transition: {
          ...transitionProps,
        },
      }),
    [activeItem, controls, positions]
  );

  const handleClick = useCallback(
    (event: any) => {
      if (node.current)
        node.current.contains(event.target)
          ? setTrackIsActive(true)
          : setTrackIsActive(false);
    },
    [setTrackIsActive]
  );

  const handleKeyDown = useCallback(
    (event: any) => {
      if (trackIsActive) {
        if (activeItem < positions.length - constraint) {
          if (event.key === "ArrowRight" || event.key === "ArrowUp") {
            event.preventDefault();
            setActiveItem((prev: number) => prev + 1);
          }
        }
        if (activeItem > positions.length - positions.length) {
          if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
            event.preventDefault();
            setActiveItem((prev: number) => prev - 1);
          }
        }
      }
    },
    [trackIsActive, setActiveItem, activeItem, constraint, positions.length]
  );

  useEffect(() => {
    handleResize();

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick, handleResize, handleKeyDown, positions]);

  return (
    <>
      {itemWidth && (
        <VStack ref={node} spacing={5} alignItems="stretch">
          <MotionFlex
            dragConstraints={node}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{ x }}
            drag="x"
            _active={{ cursor: "grabbing" }}
            minWidth="min-content"
            flexWrap="nowrap"
            cursor="grab"
          >
            {children}
          </MotionFlex>
        </VStack>
      )}
    </>
  );
};

const Item = (
  {
    setTrackIsActive,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    children,
    gap,
  }: any,
  index: number
) => {
  const [userDidTab, setUserDidTab] = useState(false);

  const handleFocus = () => setTrackIsActive(true);

  const handleBlur = () => {
    userDidTab && index + 1 === positions.length && setTrackIsActive(false);
    setUserDidTab(false);
  };

  const handleKeyUp = (event: any) =>
    event.key === "Tab" &&
    !(activeItem === positions.length - constraint) &&
    setActiveItem(index);

  const handleKeyDown = (event: any) =>
    event.key === "Tab" && setUserDidTab(true);

  return (
    <Flex
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      w={`${itemWidth}px`}
      _notLast={{
        mr: `${gap}px`,
      }}
      py="4px"
    >
      {children}
    </Flex>
  );
};

export default ChakraCarousel;
