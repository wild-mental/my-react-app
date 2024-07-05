import React, {ChangeEvent} from 'react';
import './ExpenseFilter.css';


interface ExpenseFilterProps {
    selected: string;
    onChangeFilter: (selectedYear: string) => void;
}

// ExpenseList 를 리렌더링하기 위한 제어부로,
// 유저의 select form 조작 발생 시
// 함수 드릴링을 통해 받은 state 변경 함수를 실행한다
const ExpenseFilter: React.FC<ExpenseFilterProps> = ({ selected, onChangeFilter }) => {
    const changeYearHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedYear = e.target.value;
        // console.log(selectedYear);
        onChangeFilter(selectedYear);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={selected} onChange={changeYearHandler}>
                    {/* 옵션도 5개년 프로그래밍적으로 변경 가능 */}
                    {/* 하드코딩된 부분은 반드시 서비스화 시에는 동적으로 완성해 주어야 한다! */}
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;