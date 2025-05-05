const MotionInView = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Animation triggers once when element enters the viewport
    threshold: 0.5,  // Trigger when 50% of the element is in view
  });

  return (
    <div ref={ref}>
      {/* Render children only when in the viewport */}
      {inView ? children : null}
    </div>
  );
};
export default MotionInView;