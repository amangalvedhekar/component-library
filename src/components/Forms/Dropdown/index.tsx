import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp, faCheck,} from '@fortawesome/free-solid-svg-icons';
import Button from "../../Buttons/Button";
import {borderType, List, StyledUl} from "../../List";
import styled from "styled-components";

export interface IStateType {
    dropDownOpen: boolean;
    selectedDropDown: string;
}

const StyledList = styled(StyledUl)`
    width: 100%;
    border: 1px solid grey;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-top: 0;
    padding: 0;
    text-align: left;
`;

const StyledListElement = styled(List)`
    cursor: pointer;
    :active,
    :focus, 
    :hover {
        color: white;
        background-color: #0075be;
    }
`;

const StyledButton = styled(Button)`
    margin: 0;
    text-align: left;
    > svg {
        display: inline-block;
        vertical-align: middle;
        float: right;
    }
`;

class DropDown extends React.Component<any, IStateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            dropDownOpen: false,
            selectedDropDown: this.props.title
        };
    }

    componentDidUpdate() {
        setTimeout(() => {
            const {dropDownOpen} = this.state;
            if (dropDownOpen) {
                window.addEventListener('click', this.close)
            }
            else {
                window.removeEventListener('click', this.close)
            }
        }, 0)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.close)
    }

    close(timeOut: any) {
        this.setState({
            dropDownOpen: false
        })
    }

    selectItem(title: any, id: any, stateKey: any) {
        this.setState({
            selectedDropDown: title,
            dropDownOpen: false
        }, this.props.resetThenSet(id, stateKey))
    }

    toggleList() {
        this.setState((prevState: any) => ({
            dropDownOpen: !prevState.dropDownOpen
        }))
    }

    render() {
        const {list} = this.props;
        const {dropDownOpen, selectedDropDown} = this.state;
        return (
            <>
                <StyledButton
                    loading={false}
                    disabled={false}
                    onClick={() => this.toggleList()}
                >
                    {selectedDropDown}
                    {dropDownOpen
                        ? <FontAwesomeIcon icon={faAngleUp} size={"2x"}/>
                        : <FontAwesomeIcon icon={faAngleDown} size={"2x"}/>
                    }
                </StyledButton>
                {dropDownOpen && <StyledList onClick={e => e.stopPropagation()}>
                    {list.map((item: any, idx: number) => (
                        <StyledListElement
                            data={item.id}
                            borderType={idx === list.length - 1 ? borderType.none : borderType.bottom}
                            key={item.id}
                            onClick={() => this.selectItem(item.title, item.id, item.key)}
                        >
                            {item.title} {item.selected && <FontAwesomeIcon icon={faCheck}/>}
                        </StyledListElement>
                    ))}
                </StyledList>}
            </>
        )
    }
}

export default DropDown;
