import React, { useEffect, useRef, useState } from "react";
import { Link, To, useLocation } from "react-router-dom";
import { motion, SVGMotionProps, useCycle } from "framer-motion";
import { useDimensions } from "../../utils/customHooks";
import "./MobileHeader.scss";

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);
export const Toggle = (props: { toggle: any }) => (
  <button onClick={props.toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const menuVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const menuItem = [
  { name: "首页", path: "/" },
  { name: "关于我们", path: "/about" },
  { name: "加入我们", path: "/join" },
  { name: "产品详情", path: "/product" },
  { name: "青柚人", path: "/people" },
  { name: "青柚博客", path: "/blog" },
];
export const MenuItem = (props: {
  i: number;
  onTap: Function;
  isSelected: boolean;
}) => {
  return (
    <motion.li
      variants={menuVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        onClick={props.onTap as React.MouseEventHandler<HTMLAnchorElement>}
        to={menuItem[props.i].path}
        className={props.isSelected?"selected-menu-item menu-item":"menu-item"}
      >
        {menuItem[props.i].name}
      </Link>
    </motion.li>
  );
};

const naVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemIds = [0, 1, 2, 3, 4];
export const Navigation = (props: { onTap: Function }) => {
  const [path, setPath] = useState("/");
  const location = useLocation();
  useEffect(() => {
    setPath("/" + location?.pathname.split("/")[1]);
  }, [location?.pathname]);
  return (
    <motion.ul variants={naVariants}>
      {itemIds.map((i) => (
        <MenuItem
          isSelected={path === menuItem[i].path}
          onTap={props.onTap}
          i={i}
          key={i}
        />
      ))}
    </motion.ul>
  );
};
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function MobileHeader() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <div className="mobile-header-wrap">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Toggle toggle={() => toggleOpen()} />
        <Navigation onTap={toggleOpen}></Navigation>
      </motion.nav>
    </div>
  );
}

export default MobileHeader;
