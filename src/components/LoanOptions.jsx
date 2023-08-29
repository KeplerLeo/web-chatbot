import './LoanOptions.css'

const LoanOptions = () => {
    const loanOptions = ["Do you want to apply for a loan?", "Loan conditions", "Help"];

    const onLoanOptionSelect = (loanOption) => {
        console.log("Loan option selected", loanOption);
    };
    
    return (
        <div className="loan-options">
            <h2>Loan Options</h2>
            <ul>
                {loanOptions.map((loanOption, index) => (
                    <li
                        key={index}
                        onClick={() => onLoanOptionSelect(loanOption)}
                    >
                        <a href="#">{loanOption}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LoanOptions;