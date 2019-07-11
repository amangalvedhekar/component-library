import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp, faCheck,} from '@fortawesome/free-solid-svg-icons';
import {borderType} from "../../List";
import {StyledButton, StyledList, StyledListElement, AngleButton} from "./styles";
import {IStateType} from "./types";

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
        })
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
                    <span>{selectedDropDown}</span>
                    <AngleButton angleType={dropDownOpen ? "up" : "down"}/>
                </StyledButton>
                {dropDownOpen && <StyledList onClick={e => e.stopPropagation()}>
                    {list.map((item: any, idx: number) => (
                        <StyledListElement
                            data={item.id}
                            borderType={idx === list.length - 1 ? borderType.none : borderType.bottom}
                            key={item.id}
                            onClick={() => this.selectItem(item.title, item.id, item.key)}
                        >
                            {item.title} {item.title === selectedDropDown && <FontAwesomeIcon icon={faCheck} color={"#0075be"} />}
                        </StyledListElement>
                    ))}
                </StyledList>}
            </>
        )
    }
}

export default DropDown;
