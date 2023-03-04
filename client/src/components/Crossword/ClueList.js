import React from "react";

class ClueList extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'left'}}>
                <h4>Across</h4>
                {
                    this.props.clue_data?.map((data_element) => {
                        return this.props.clue_list?.map((clue_element) => {
                            if ((clue_element.word.toUpperCase() === data_element.word.toUpperCase()) && data_element.dir === 0){
                                return <h1 key={data_element.word.toUpperCase()}>{data_element.id}. {clue_element.clue}</h1>
                            }
                            return null
                        })
                    })
                }
                <h4> Down</h4>
                {
                    this.props.clue_data?.map((data_element) => {
                        return this.props.clue_list?.map((clue_element) => {
                            if ((clue_element.word.toUpperCase() === data_element.word.toUpperCase()) && data_element.dir === 1){
                                return <h1 key={data_element.word.toUpperCase()}>{data_element.id}. {clue_element.clue}</h1>
                            }
                            return null
                        })
                    })
                }
            </div>
        );
    };
};

export default ClueList;