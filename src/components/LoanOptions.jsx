import './LoanOptions.css'

const LoanOptions = () => {
    const loanOptions = ["1: Do you want to apply for a loan?", "2: Loan conditions", "3: Help"];
    
    return (
        <div className="loan-options">
            <h2>Loan Options</h2>
            <ul>
                {loanOptions.map((loanOption, index) => (
                    <li
                        key={index}
                    >
                        {loanOption}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LoanOptions;