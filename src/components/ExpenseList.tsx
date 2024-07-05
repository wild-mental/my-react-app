import React, { useState } from "react";
import ExpenseItem, {ExpenseItemProps} from "./ExpenseItem";
// import "./ExpenseList.css";
import Card from "./UI/Card";
import ExpensesFilter from "./ExpenseFilter";

interface ExpenseListProps {
    items: ExpenseItemProps[];
}

const ExpenseList:React.FC<ExpenseListProps> = (props) => {
    // 1. 리스트를 특정 내역만 볼 수 있도록 필터링 적용
    // 1-1. 상태변수로 현재 선택된 리스트를 표시할 수 있도록 리렌더링 제어
    const [filteredYear, setFilteredYear] = useState("2024");

    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
        // Select 인풋에 전달한 함수이므로, 변경 이벤트 발생 시 filteredYear 업데이트를 수행하고 있음
        console.log(selectedYear);
    };

    // 1-2. 리렌더링이 발생할 때, 실제 필터링을 수행할 수 있도록 변경 적용 필요!
    // 필터링 수행
    // const filteredExpenseList = props.items.filter(
    //     (expenseItem) =>
    //         expenseItem.date.getFullYear().toString() === filteredYear
    // )
    // console.log(props.items)
    // console.log(filteredYear)
    //console.log(filteredExpenseList)
    // 컴포넌트형으로 필터링된 ExpenseItem 내역 변경
    let expenseList: React.ReactElement | React.ReactElement[] = <p>지출 내역 없음</p>;
    // if (filteredExpenseList.length > 0) {
        // map 형태로 메서드 체이닝 수행
        expenseList = props.items
            .filter(
                (expenseItem) =>
                    expenseItem.date.getFullYear().toString() === filteredYear
            )  // 조건문 적용 여부에 따른 숏컷 필요 없음 -> 코드 간결화가 가장 효과적!
            .map(
            // 인풋 Props (배열 데이터) => (아웃풋 Component)
            (expenseItem) => (
                // JS 자체에서 DOM 객체 생성 시,
                // 객체도 배열처럼 순회 가능 (즉, 순차 접근 가능한 key 를 가짐)
                // React 에서는 이 key 값으로 변경 검사를 수행해서,
                // 변경된 항목만 리렌더링할 수 있도록 최적화 적용
                <ExpenseItem
                    key={Math.random().toString()}
                    title={expenseItem.title}
                    price={expenseItem.price}
                    date={expenseItem.date}
                />
            )
        );
    // }

    console.log(expenseList);

    return (
        <div>
            {/*<Card className='expenses'>*/}
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* 2. Item 배열을 자동 순회 (map 방식으로 변경) */}
                {/*<ExpenseItem*/}
                {/*    title={props.items[0].title}*/}
                {/*    price={props.items[0].price}*/}
                {/*    date={props.items[0].date}*/}
                {/*/>*/}
                {expenseList}
            {/*</Card>*/}
        </div>
    );
};

export default ExpenseList;