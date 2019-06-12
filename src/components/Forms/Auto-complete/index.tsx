import React, {Component, Fragment} from "react";
import {TextInput} from "../Elements/Input";
import {borderType, List, StyledUl} from "../../List";
import styled from "styled-components";

const StyledSuggestion = styled(StyledUl)`
    width: 100%;
    border: 1px solid grey;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-width: 0;
    margin-top: 0;
    padding: 0;
`;

class AutoComplete extends Component {
    constructor(props:  any) {
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
    // @ts-ignore
    onChange = e => {
        // @ts-ignore
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(
            // @ts-ignore
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
    // @ts-ignore
    onClick = e => {
        // Update the user input and reset the rest of the state
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    };

    // Event fired when the user presses a key down
    // @ts-ignore
    onKeyDown = e => {
        // @ts-ignore
        const { activeSuggestion, filteredSuggestions } = this.state;

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
                // @ts-ignore
                activeSuggestion,
                // @ts-ignore
                filteredSuggestions,
                // @ts-ignore
                showSuggestions,
                // @ts-ignore
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
                                <List
                                    data={suggestion}
                                    borderType={index === filteredSuggestions.length - 1 ? borderType.none : borderType.bottom}
                                    tabIndex={0}
                                    key={suggestion}
                                    onClick={onClick}
                                >
                                    {suggestion}
                                </List>
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
            <Fragment>
                <TextInput
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                    role={"search"}
                    placeholder={"city"}
                />
                {suggestionsListComponent}
            </Fragment>
        );
    }
}

export default AutoComplete;