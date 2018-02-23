import React, {Component} from 'react';
import logo from './logo.png';

import './ShadowRoller.css';
import {
    AnySuccessDie,
    BaneDie,
    BoonDie,
    DamageAgentDie,
    DecreaseCorruptionDie,
    EncounterDie,
    IncreaseCorruptionDie,
    InsanityDie,
    MagicDie,
    MagicSuccessDie,
    NegateSuccessDie,
    ShadowDie,
    SkillDie,
    SkillSuccessDie,
    WeaponDie,
    WeaponSuccessDie
} from './DiceSvg';
import {
    ANY_SUCCESS,
    BANE_COLOR,
    BOON_COLOR,
    DAMAGE_AGENT,
    DECREASE_CORRUPTION,
    ENCOUNTER_COLOR,
    INCREASE_CORRUPTION,
    INSANITY_TO_AGENT,
    MAGIC_COLOR,
    MAGIC_SUCCESS,
    NEGATE_SUCCESS,
    rollBanes,
    rollBoons,
    rollEncounters,
    rollMagics,
    rollShadows,
    rollSkills,
    rollWeapons,
    SHADOW_COLOR,
    SKILL_COLOR,
    SKILL_SUCCESS,
    WEAPON_COLOR,
    WEAPON_SUCCESS
} from "./RollingDefinitions";

function RolledDie(props) {
    return (
        <div className="card flex-col">
            <div className="card-body">
                {props.die}
            </div>
            <div className="card-footer">
                <small>{props.name}</small>
            </div>
        </div>
    );
}

function DiceCategory(props) {
    return (
        <div className="">
            <div className="row">
                <div className="col center">
                    {props.diceName}
                </div>
            </div>
            <div className="row align-items-center no-gutters">
                <div className="col-3">
                    <i className="fa fa-minus-circle fa-lg" onClick={() => props.handleValue(-1)}/>
                </div>
                <div className="col-6">
                    {props.diceImg}
                </div>
                <div className="col-3">
                    <i className="fa fa-plus-circle fa-lg" onClick={() => props.handleValue(1)}/>
                </div>
            </div>
            <div className="row">
                <div className="col center">
                    {props.amount}
                </div>
            </div>
        </div>
    )
}

class ShadowRoller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice: Array(7).fill(0),
            rolls: []
        };
    }

    changeValue(i, val) {
        const dice = this.state.dice.slice();
        dice[i] = dice[i] + val;
        if (dice[i] < 0) {
            return;
        }
        this.setState({dice: dice});
    }

    reset() {
        this.setState({rolls: [], dice: Array(7).fill(0)})
    }

    roll() {
        const dice = this.state.dice;
        let rolled = [];
        rolled = rolled.concat(rollBoons(dice[0]));
        rolled = rolled.concat(rollBanes(dice[1]));
        rolled = rolled.concat(rollEncounters(dice[2]));
        rolled = rolled.concat(rollMagics(dice[3]));
        rolled = rolled.concat(rollShadows(dice[4]));
        rolled = rolled.concat(rollSkills(dice[5]));
        rolled = rolled.concat(rollWeapons(dice[6]));
        this.setState({rolls: rolled})
    }


    render() {
        const boonDie = <BoonDie color={BOON_COLOR}/>;
        const baneDie = <BaneDie color={BANE_COLOR}/>;
        const encounterDie = <EncounterDie color={ENCOUNTER_COLOR}/>;
        const magicDie = <MagicDie color={MAGIC_COLOR}/>;
        const shadowDie = <ShadowDie color={SHADOW_COLOR}/>;
        const skillDie = <SkillDie color={SKILL_COLOR}/>;
        const weaponDie = <WeaponDie color={WEAPON_COLOR}/>;

        const rolls = this.state.rolls;
        const rolled = rolls.map(value => {
            switch (value.die) {
                case NEGATE_SUCCESS:
                    return <RolledDie die={<NegateSuccessDie color={value.color}/>} name="Negate Success"/>;
                case INCREASE_CORRUPTION:
                    return <RolledDie die={<IncreaseCorruptionDie color={value.color}/>} name="Increase corruption"/>;
                case DECREASE_CORRUPTION:
                    return <RolledDie die={<DecreaseCorruptionDie color={value.color}/>} name="Decrease Corruption"/>;
                case ANY_SUCCESS:
                    return <RolledDie die={<AnySuccessDie color={value.color}/>} name="Any Success"/>;
                case DAMAGE_AGENT:
                    return <RolledDie die={<DamageAgentDie color={value.color}/>} name="Damage an Agent"/>;
                case INSANITY_TO_AGENT:
                    return <RolledDie die={<InsanityDie color={value.color}/>} name="Insanity on Agent"/>;
                case MAGIC_SUCCESS:
                    return <RolledDie die={<MagicSuccessDie color={value.color}/>} name="Magic Success"/>;
                case WEAPON_SUCCESS:
                    return <RolledDie die={<WeaponSuccessDie color={value.color}/>} name="Weapon Success"/>;
                case SKILL_SUCCESS:
                    return <RolledDie die={<SkillSuccessDie color={value.color}/>} name="Skill Success"/>;
                default:
                    return "";
            }
        });

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Against the Shadow dice roller</h1>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="row">
                                <div className="col">

                                    <DiceCategory diceName="Boon" diceImg={boonDie} amount={this.state.dice[0]}
                                                  handleValue={(val) => this.changeValue(0, val)}/>
                                    <DiceCategory diceName="Bane" diceImg={baneDie} amount={this.state.dice[1]}
                                                  handleValue={(val) => this.changeValue(1, val)}/>
                                    <DiceCategory diceName="Encounter" diceImg={encounterDie}
                                                  amount={this.state.dice[2]}
                                                  handleValue={(val) => this.changeValue(2, val)}/>
                                    <DiceCategory diceName="Shadow" diceImg={shadowDie} amount={this.state.dice[4]}
                                                  handleValue={(val) => this.changeValue(4, val)}/>
                                </div>

                                <div className="col">

                                    <DiceCategory diceName="Magic" diceImg={magicDie} amount={this.state.dice[3]}
                                                  handleValue={(val) => this.changeValue(3, val)}/>
                                    <DiceCategory diceName="Skill" diceImg={skillDie} amount={this.state.dice[5]}
                                                  handleValue={(val) => this.changeValue(5, val)}/>
                                    <DiceCategory diceName="Weapon" diceImg={weaponDie} amount={this.state.dice[6]}
                                                  handleValue={(val) => this.changeValue(6, val)}/>
                                    <div>
                                        <button className="btn" onClick={() => this.reset()}>Reset</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="flex-container">{rolled}</div>
                        </div>
                    </div>
                </div>
                <button className="btn" onClick={() => this.roll()}>Roll</button>
            </div>
        );
    }
}

export default ShadowRoller;