import React from 'react';

const PlanTitle = (props) => {
    switch (props.title) {
        case 'رایگان' :
            return <h2 className="font-applied free-plan">رایگان</h2>;
        case '۱ ستاره' :
            return <h2 className="font-applied bronze-plan">۱ ستاره</h2>;
        case '۲ ستاره' :
            return <h2 className="font-applied silver-plan">۲ ستاره</h2>;
        case '۳ ستاره' :
            return <h2 className="font-applied gold-plan">۳ ستاره</h2>;
        default:
            return <h2>بدون عنوان</h2>;
    }
};

export default PlanTitle;