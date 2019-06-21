import React, {Component} from 'react';
import InputButton from "./components/Forms/Input-Button/";
import SectionHeading from "./components/Header/";
import styled from "styled-components";
import {TextInput} from "./components/Forms/Elements/Input";
import Button from "./components/Buttons/Button";
import {borderType, List, StyledUl} from "./components/List";
import {Link} from "./components/Link";
import CheckBox from "./components/Forms/CheckBox/";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: 16px;
`;

const StyledHeader = styled(SectionHeading)`
  text-align: left;
`;


const getPackedItems = (items: IItemType[]) => items
    .filter(elm => !elm.isUnpacked);

const getUnPackedItems = (items: IItemType[]) => items
    .filter(elm => elm.isUnpacked);

export interface IItemType {
    isUnpacked: boolean;
    name: string;
    unPackedMatch?: boolean;
}

class App extends Component {
    state = {
        items: [],
        userEnteredValue: "",
        isInputButtonDisabled: true,
        unPackedFilterSelected: false,
    };

    public handleClick = (e: any) => {
        const unpacked = getUnPackedItems(this.state.items);
        const items = getPackedItems(this.state.items)
            .map((elm: IItemType) => {
                return {
                    isUnpacked: true,
                    name: elm.name
                }
            });
        this.setState({
            items: unpacked.concat(...items)
        });
    };

    public handleRemoveClick = (name: string) => (e: any) => {
        const items = this.state.items
            .filter((elm: IItemType) => elm.name !== name);
        this.setState({
            items
        });
    };

    public handleCheckBoxChange = (name: string) => (e: any) => {
        const items = this.state.items.map((elm: IItemType) => {
            if (elm.name === name) {
                return {
                    isUnpacked: !elm.isUnpacked,
                    name: elm.name,
                }
            }
            return elm;
        });
        this.setState({
            items
        });
    };

    public buildItems = (items: IItemType[], itemType: "unpacked" | "packed") => {
        const elements: IItemType[] = {
            packed: getPackedItems(items),
            unpacked: getUnPackedItems(items)
        }[itemType];

        return ((elements && elements.length > 0) ? (<StyledUl>
            {elements.map((elm: IItemType) => (
                <List
                    data={elm.name}
                    key={elm.name}
                    borderType={borderType.none}
                >
                    <CheckBox
                        name={elm.name}
                        labelname={elm.name}
                        checked={itemType === "packed"}
                        onChange={this.handleCheckBoxChange(elm.name)}
                    />
                    <Link
                        href={"#"}
                        color={"#f32e5b"}
                        onClick={this.handleRemoveClick(elm.name)}
                    >
                        Remove
                    </Link>
                </List>))}
        </StyledUl>) : null);
    };

    public handleSubmit = (e: any) => {
        e.preventDefault();
        if (this.state.userEnteredValue.trim() !== "") {
            const items: IItemType[] = [
                ...this.state.items,
                {
                    isUnpacked: true,
                    name: this.state.userEnteredValue
                }
            ];
            this.setState({
                items,
                isInputButtonDisabled: true,
                userEnteredValue: ""
            });
        }

    };

    public handleChange = (e: any) => {
        let updatedInputState;
        if (this.state.isInputButtonDisabled) {
            updatedInputState = false;
        }
        this.setState({
            userEnteredValue: e.currentTarget.value,
            isInputButtonDisabled: updatedInputState
        });
    };

    render() {
        return (
            <Wrapper>
                <form onSubmit={this.handleSubmit}>
                    <InputButton
                        placeholder={"Enter items to pack"}
                        type={"text"}
                        buttonText={"Submit"}
                        value={this.state.userEnteredValue}
                        isDisabled={this.state.isInputButtonDisabled}
                        isLoading={false}
                        onChange={this.handleChange}
                    />
                </form>
                <StyledHeader
                    size={"2"}>
                    Unpacked Items ({getUnPackedItems(this.state.items).length})
                </StyledHeader>
                <TextInput
                    placeholder={"Search unpacked items"}
                />
                {this.buildItems(this.state.items, "unpacked")}
                <StyledHeader size={"2"}>
                    Packed Items ({getPackedItems(this.state.items).length})
                </StyledHeader>
                <TextInput placeholder={"Search packed items"}/>
                {this.buildItems(this.state.items, "packed")}
                <Button
                    loading={false}
                    disabled={!(getPackedItems(this.state.items).length > 0)}
                    color={"#f32e5b"}
                    onClick={this.handleClick}
                >
                    Mark All As unpacked
                </Button>
            </Wrapper>
        );
    }
}

export default App;
