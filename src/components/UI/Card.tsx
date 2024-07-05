import React from 'react'
import 'components/UI/Card.css';

interface CardProps {
    className?: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
    // 스타일 적용을 카드 종류별로 하기 위해서 아래와 같이 className 으로 출처 컴포넌트를 감지합니다.
    const cn = 'card ' + className;

    return (
        <div className={cn}>
            {children}
        </div>
    )
}

export default Card