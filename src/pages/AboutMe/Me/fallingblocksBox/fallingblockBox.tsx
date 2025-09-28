import React, { useState } from'react';
import './fallingblockBox.scss';

const FallingBox = () => {
    const [boxClasses, setBoxClasses] = useState(
        Array(760).fill('box')
    );

    const handleMouseEnter = (index: number) => {
        // 复制一份类名数组
        const newClasses = [...boxClasses];
        // 将对应索引的类名设置为 'box active'
        newClasses[index] = 'box boxactive';
        // 更新状态
        setBoxClasses(newClasses);
    };
    const boxes = Array.from(
        { length: 768 }, 
        (_, index) => (
            <div
                key={index}
                // 根据状态设置 className
                className={boxClasses[index]}
                onMouseEnter={() => handleMouseEnter(index)}
            ></div>
        )
    );

    return (
        <React.Fragment>
            <div className="fallingBox">
                {boxes}
            </div>
        </React.Fragment>
    );
};

export default FallingBox;