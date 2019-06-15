import React, {Component, Fragment} from "react";
import {TextInput} from "../Elements/Input";
import {borderType, List, StyledUl} from "../../List";
// import {device} from "../../../utility/css";
import styled from "styled-components";

export interface IAutoCompleteProps {
    suggestions: string[];
}

export interface IAutoCompleteState {
    activeSuggestion: number;
    filteredSuggestions: string[];
    showSuggestions: boolean;
    userInput: string;
}

const StyledSuggestion = styled(StyledUl)`
    width: calc(100% + 1rem);
    border: 1px solid grey;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-top: 0;
    padding: 0;
    text-align: left;
`;

const SuggestionElement = styled(List)`
    cursor: pointer;
    :active,
    :focus, 
    :hover {
        color: white;
        background-color: blue;
    }
`;

class AutoComplete extends Component<IAutoCompleteProps, IAutoCompleteState> {
    constructor(props:  IAutoCompleteProps) {
        super(props);

        this.state = {
            // The active selection's index
            activeSuggestion: 0,
            // The suggestions that match the user's input
            filteredSuggestions: [],
            // Whether or not the suggestion list is shown
            showSuggestions: false,
            // What the user has entered
            userInput: ""
        };
    }

    // Event fired when the input value is changed
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        // Update the user input and filtered suggestions, reset the active
        // suggestion and make sure the suggestions are shown
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };

    // Event fired when the user clicks on a suggestion
    onClick = (e: any) => {
        // Update the user input and reset the rest of the state
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    };

    // Event fired when the user presses a key down
    onKeyDown = (e: any) => {
        const { activeSuggestion, filteredSuggestions } = this.state;
        console.log("user pressed enter", e.currentTarget);
        // User pressed the enter key, update the input and close the
        // suggestions
        if (e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        }
        // User pressed the up arrow, decrement the index
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <StyledSuggestion>
                        {filteredSuggestions.map((suggestion: any, index: number) => {

                            return (
                                <SuggestionElement
                                    data={suggestion}
                                    borderType={index === filteredSuggestions.length - 1 ? borderType.none : borderType.bottom}
                                    tabIndex={0}
                                    key={suggestion}
                                    onClick={onClick}
                                >
                                    {suggestion}
                                </SuggestionElement>
                            );
                        })}
                    </StyledSuggestion>
                );
            } else {
                suggestionsListComponent = (
                    <div>
                        <em>No suggestions, you're on your own!</em>
                    </div>
                );
            }
        }

        return (
            <div>
                <TextInput
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                    role={"search"}
                    placeholder={"city"}
                />
                {suggestionsListComponent}
            </div>
        );
    }
}

export default AutoComplete;