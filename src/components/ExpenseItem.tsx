import React, {ChangeEvent, useState} from 'react';
import './ExpenseItem.css';
// import {ExpenseData} from "./ExpenseForm";
import Card from './UI/Card';
import ExpenseDate from "./ExpenseDate";

// 기존의 ExpenseData 에서 사용했던 string 타입 date 를 클래스로 변경
export interface ExpenseItemProps {
    title: string;
    price: number;
    date: Date;
}

const ExpenseItem: React.FC<ExpenseItemProps>= ({ title, price, date }) => {
    // let itemTitle = title;

    // useState는 컴포넌트의 상태값을 관리하며 이 상태값은 렌더링에 영향을 미침
    /*
      - useState훅의 리턴값은 배열이며
      - 첫번째 요소는 관리할 상태값의 초기값
      - 두번째 요소는 해당 상태값을 변경할 때 사용하는 setter함수
    */
    // title 변경시에 리렌더링 제어를 위한 state 변수 선언
    // 하나의 객체로 전체 렌더링 제어할 수 있도록 변경 권장
    // const [itemTitle, setItemTitle] = useState(title);
    // console.log('abc: ',abc);

    // 원화 표기법으로 변환
    const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);

    return (
        <Card className="expense-item">
            <ExpenseDate exDate={new Date(date)} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{formattedPrice}원</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;
