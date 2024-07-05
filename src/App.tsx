import React, {useState} from 'react';
import './App.css';
import 'components/HeaderContent'
// import HeaderContent from "components/HeaderContent";
// import MyComponent from "components/MyComponent";
// import ButtonStyled from "./components/ButtonStyled";
// import MyButton from "./components/MyButton";
// import MyStateComponent from "./components/MyStateComponent";
// import ClickCounter from "./components/ClickCounter";
// import ReloacControlEx from "./components/ReloadControlEx";
import ExpenseForm, {ExpenseData} from "./components/ExpenseForm";
import ExpenseItem, {ExpenseItemProps} from "./components/ExpenseItem";
import ExpenseList from "./components/ExpenseList";
// import DrillingParent from "./components/DrillingParent";
// import CalledBackParent from "./components/CalledBackParent";

interface PersonProps {  // 타입 힌트에 사용
    name?: string;
    age?: number;
}

function Person(
    // props: { name: string; age: number; }
    props: PersonProps
)
{
    return <h1>Hello, {props.name}. You are {props.age} years old.</h1>;
}

interface FruitListProps {
    // items: Array<string>;
    // items: string[];
    // items?: string[];
    // items: any;
    // items: undefined;
    items: unknown;
}

function isStringArr(value: unknown): value is string[] {
    return typeof value === 'string';
}

function FruitList(props: FruitListProps) {
    //const { items } = props as { items: string[] };
    // const items = props.items as string[];
    const items = props.items;
    if (!isStringArr(items)) {
        return (
            <p>items 데이터 타입이 잘못들어왔습니다.</p>
        )
    }
    return (
        <ul>
            {/* ? 를 사용한 조건부 참조형 타입 컨트롤 수행 시 */}
            {/* 해당 타입을 사용할 때에도 조건부 참조하면 좋다 */}
            {items.map((item, index) => (
            // {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

interface WelcomeProps {
    children: any;
}

function Welcome(props: WelcomeProps) {
    return <div>{props.children}</div>;
}

function ToggleText(props: any) {
    const [isShown, setIsShown] = useState(false);
    return (
        <div onClick={() => setIsShown(!isShown)}>
            {isShown ? props.children : props.alternative}
        </div>
    );
}

function App() {
    // App 자체에서 지출데이터의 목록을 배열로 관리한다.
    const [expenses, setExpenses] = useState<ExpenseItemProps[]>(
        [
            {
                title: "더미 지출 내역 1입니다.",
                price: 10000,
                date: new Date()
            },
            {
                title: "더미 지출 내역 2입니다.",
                price: 20000,
                date: new Date()
            },
            {
                title: "더미 지출 내역 3입니다.",
                price: 30000,
                date: new Date()
            }
        ]
    );
    // add 이벤트 발생 시 데이터의 배열에 맨 첫 항목으로 추가된 지출 내역을 넣는다.
    const addExpenseHandler = (expense: ExpenseItemProps) => {
        // state 변수 업데이트
        setExpenses(prevExpenses => [expense, ...prevExpenses])
        // 콘솔에서 값 확인
        console.log(expenses, expense);
    };

    const expenseItem = {
        title: "더미 지출 내역입니다.",
        price: 50000,
        date: new Date()
    };

    const name = 'External name data';

    return (
        <div className="App">
            {/*<HeaderContent />*/}
            {/*<MyComponent />*/}
            {/*<ButtonStyled>일반 버튼</ButtonStyled>*/}
            {/*<ButtonStyled primary={true}>Primary 버튼</ButtonStyled>*/}
            {/*<Person name="Sarah" age={28} />*/}
            {/*<Person name="John" age={29} />*/}
            {/*<FruitList items={['Apple', 'Banana', 'Cherry']} />*/}
            {/*<Welcome>*/}
            {/*    children 에 해당하는 내용을 여기에 전달합니다.*/}
            {/*</Welcome>*/}
            {/*<Welcome>*/}
            {/*    <Person name="John" age={29} />*/}
            {/*</Welcome>*/}
            {/*<Card>*/}
            {/*  <h1>Hello, world!</h1>*/}
            {/*  <p>Welcome to my application.</p>*/}
            {/*</Card>*/}
            {/*<ToggleText alternative="Click to show text">Hello, world!</ToggleText>*/}
            {/*<MyButton handlerType={"external props receiver"} />*/}
            {/*<MyStateComponent />*/}
            {/*<ClickCounter />*/}
            {/*  <ReloacControlEx />*/}
            {/*<h1>Drilling Example</h1>*/}
            {/*<DrillingParent name={name} />*/}
            {/*<hr/>*/}
            {/*<CalledBackParent />*/}
            <ExpenseForm onSaveExpense={addExpenseHandler} />
            {/*<ExpenseItem title={expenseItem.title} price={expenseItem.price} date={expenseItem.date} />*/}
            <ExpenseList items={expenses} />
        </div>
  );
}

export default App;
