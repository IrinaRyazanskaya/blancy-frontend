const area = 48;

function BurgerButton({
    label,
    className,
    hideOutline = true,
    size = 32,
    color = 'currentColor',
    lines = 3,
    easing = 'cubic-bezier(0, 0, 0, 1)',
    duration = 0.4,
    distance = 'md',
    isToggled,
    onToggle,
}) {
    const width = Math.max(12, Math.min(area, size));
    const room = Math.round((area - width) / 2);

    const barHeightRaw = width / 12;
    const barHeight = Math.round(barHeightRaw);

    const space = distance === 'lg' ? 0.25 : distance === 'sm' ? 0.75 : 0.5;
    const marginRaw = width / (lines * (space + (lines === 3 ? 1 : 1.25)));
    const margin = Math.round(marginRaw);

    const height = barHeight * lines + margin * (lines - 1);
    const topOffset = Math.round((area - height) / 2);

    const time = Math.max(0, duration);

    const burgerStyles = {
        cursor: 'pointer',
        height: `${area}px`,
        position: 'relative',
        transition: `${time}s ${easing}`,
        userSelect: 'none',
        width: `${area}px`,
    };

    const barStyles = {
        background: color,
        height: `${barHeight}px`,
        left: `${room}px`,
        position: 'absolute',
        borderRadius: '30px',
    };

    if (hideOutline) {
        burgerStyles['outline'] = 'none';
    }

    return (
        <div
            className={className}
            style={burgerStyles}
            tabIndex={0}
            role="button"
            aria-label={label}
            aria-expanded={isToggled}
            onClick={onToggle}
        >
            <div
                style={{
                    transition: `${time / 2}s ${easing} ${
                        isToggled ? '0s' : `${time / 2}s`
                    }`,
                    transform: `${
                        isToggled ? `translateY(${barHeight + margin}px)` : 'none'
                    }`,
                }}
            >
                <div
                    style={{
                        ...barStyles,
                        width: isToggled ? `${width}px` : `${width - 4}px`,
                        top: `${topOffset}px`,
                        transition: `${time / 2}s ${easing} ${
                            isToggled ? `${time / 2}s` : '0s'
                        }`,
                        transform: `${isToggled ? `rotate(45deg)` : 'none'}`,
                    }}
                />
            </div>

            <div
                style={{
                    transition: `${time / 2}s ${easing}`,
                    opacity: `${isToggled ? '0' : '1'}`,
                }}
            >
                <div
                    style={{
                        ...barStyles,
                        width: `${width}px`,
                        top: `${topOffset + barHeight + margin}px`,
                        transition: `${time / 2}s ${easing}`,
                    }}
                />
            </div>

            <div
                style={{
                    transition: `${time / 2}s ${easing} ${
                        isToggled ? '0s' : `${time / 2}s`
                    }`,
                    transform: `${
                        isToggled ? `translateY(-${barHeight + margin}px)` : 'none'
                    }`,
                }}
            >
                <div
                    style={{
                        ...barStyles,
                        width: isToggled ? `${width}px` : `${width - 8}px`,
                        top: `${topOffset + barHeight * 2 + margin * 2}px`,
                        transition: `${time / 2}s ${easing} ${
                            isToggled ? `${time / 2}s` : '0s'
                        }`,
                        transform: `${isToggled ? `rotate(-45deg)` : 'none'}`,
                    }}
                />
            </div>
        </div>
    );
}

export { BurgerButton };
