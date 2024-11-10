import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type StdAddress = {
    $$type: 'StdAddress';
    workchain: bigint;
    address: bigint;
}

export function storeStdAddress(src: StdAddress) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.workchain, 8);
        b_0.storeUint(src.address, 256);
    };
}

export function loadStdAddress(slice: Slice) {
    let sc_0 = slice;
    let _workchain = sc_0.loadIntBig(8);
    let _address = sc_0.loadUintBig(256);
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function loadTupleStdAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleStdAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleStdAddress(source: StdAddress) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeNumber(source.address);
    return builder.build();
}

function dictValueParserStdAddress(): DictionaryValue<StdAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStdAddress(src)).endCell());
        },
        parse: (src) => {
            return loadStdAddress(src.loadRef().beginParse());
        }
    }
}

export type VarAddress = {
    $$type: 'VarAddress';
    workchain: bigint;
    address: Slice;
}

export function storeVarAddress(src: VarAddress) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.workchain, 32);
        b_0.storeRef(src.address.asCell());
    };
}

export function loadVarAddress(slice: Slice) {
    let sc_0 = slice;
    let _workchain = sc_0.loadIntBig(32);
    let _address = sc_0.loadRef().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function loadTupleVarAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleVarAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleVarAddress(source: VarAddress) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeSlice(source.address.asCell());
    return builder.build();
}

function dictValueParserVarAddress(): DictionaryValue<VarAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeVarAddress(src)).endCell());
        },
        parse: (src) => {
            return loadVarAddress(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadGetterTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw.asCell());
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadGetterTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadGetterTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadGetterTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadGetterTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type Goal = {
    $$type: 'Goal';
    id: bigint;
    name: string;
    description: string;
    requiredStake: bigint;
    creator: Address;
    completed: boolean;
    participants: Dictionary<bigint, Address>;
    participantsCount: bigint;
    taskCount: bigint;
    goalType: bigint;
    isParticipant: Dictionary<Address, boolean>;
    isClaimed: Dictionary<Address, boolean>;
    completedTaskCount: Dictionary<Address, bigint>;
    rewards: Dictionary<Address, bigint>;
}

export function storeGoal(src: Goal) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.id, 256);
        b_0.storeStringRefTail(src.name);
        b_0.storeStringRefTail(src.description);
        b_0.storeUint(src.requiredStake, 256);
        b_0.storeAddress(src.creator);
        b_0.storeBit(src.completed);
        let b_1 = new Builder();
        b_1.storeDict(src.participants, Dictionary.Keys.BigUint(256), Dictionary.Values.Address());
        b_1.storeUint(src.participantsCount, 256);
        b_1.storeUint(src.taskCount, 256);
        b_1.storeInt(src.goalType, 257);
        b_1.storeDict(src.isParticipant, Dictionary.Keys.Address(), Dictionary.Values.Bool());
        b_1.storeDict(src.isClaimed, Dictionary.Keys.Address(), Dictionary.Values.Bool());
        let b_2 = new Builder();
        b_2.storeDict(src.completedTaskCount, Dictionary.Keys.Address(), Dictionary.Values.BigUint(256));
        b_2.storeDict(src.rewards, Dictionary.Keys.Address(), Dictionary.Values.BigUint(256));
        b_1.storeRef(b_2.endCell());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadGoal(slice: Slice) {
    let sc_0 = slice;
    let _id = sc_0.loadUintBig(256);
    let _name = sc_0.loadStringRefTail();
    let _description = sc_0.loadStringRefTail();
    let _requiredStake = sc_0.loadUintBig(256);
    let _creator = sc_0.loadAddress();
    let _completed = sc_0.loadBit();
    let sc_1 = sc_0.loadRef().beginParse();
    let _participants = Dictionary.load(Dictionary.Keys.BigUint(256), Dictionary.Values.Address(), sc_1);
    let _participantsCount = sc_1.loadUintBig(256);
    let _taskCount = sc_1.loadUintBig(256);
    let _goalType = sc_1.loadIntBig(257);
    let _isParticipant = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.Bool(), sc_1);
    let _isClaimed = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.Bool(), sc_1);
    let sc_2 = sc_1.loadRef().beginParse();
    let _completedTaskCount = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), sc_2);
    let _rewards = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), sc_2);
    return { $$type: 'Goal' as const, id: _id, name: _name, description: _description, requiredStake: _requiredStake, creator: _creator, completed: _completed, participants: _participants, participantsCount: _participantsCount, taskCount: _taskCount, goalType: _goalType, isParticipant: _isParticipant, isClaimed: _isClaimed, completedTaskCount: _completedTaskCount, rewards: _rewards };
}

function loadTupleGoal(source: TupleReader) {
    let _id = source.readBigNumber();
    let _name = source.readString();
    let _description = source.readString();
    let _requiredStake = source.readBigNumber();
    let _creator = source.readAddress();
    let _completed = source.readBoolean();
    let _participants = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.Address(), source.readCellOpt());
    let _participantsCount = source.readBigNumber();
    let _taskCount = source.readBigNumber();
    let _goalType = source.readBigNumber();
    let _isParticipant = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
    let _isClaimed = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
    let _completedTaskCount = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _rewards = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), source.readCellOpt());
    return { $$type: 'Goal' as const, id: _id, name: _name, description: _description, requiredStake: _requiredStake, creator: _creator, completed: _completed, participants: _participants, participantsCount: _participantsCount, taskCount: _taskCount, goalType: _goalType, isParticipant: _isParticipant, isClaimed: _isClaimed, completedTaskCount: _completedTaskCount, rewards: _rewards };
}

function loadGetterTupleGoal(source: TupleReader) {
    let _id = source.readBigNumber();
    let _name = source.readString();
    let _description = source.readString();
    let _requiredStake = source.readBigNumber();
    let _creator = source.readAddress();
    let _completed = source.readBoolean();
    let _participants = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.Address(), source.readCellOpt());
    let _participantsCount = source.readBigNumber();
    let _taskCount = source.readBigNumber();
    let _goalType = source.readBigNumber();
    let _isParticipant = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
    let _isClaimed = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
    let _completedTaskCount = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _rewards = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), source.readCellOpt());
    return { $$type: 'Goal' as const, id: _id, name: _name, description: _description, requiredStake: _requiredStake, creator: _creator, completed: _completed, participants: _participants, participantsCount: _participantsCount, taskCount: _taskCount, goalType: _goalType, isParticipant: _isParticipant, isClaimed: _isClaimed, completedTaskCount: _completedTaskCount, rewards: _rewards };
}

function storeTupleGoal(source: Goal) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.id);
    builder.writeString(source.name);
    builder.writeString(source.description);
    builder.writeNumber(source.requiredStake);
    builder.writeAddress(source.creator);
    builder.writeBoolean(source.completed);
    builder.writeCell(source.participants.size > 0 ? beginCell().storeDictDirect(source.participants, Dictionary.Keys.BigUint(256), Dictionary.Values.Address()).endCell() : null);
    builder.writeNumber(source.participantsCount);
    builder.writeNumber(source.taskCount);
    builder.writeNumber(source.goalType);
    builder.writeCell(source.isParticipant.size > 0 ? beginCell().storeDictDirect(source.isParticipant, Dictionary.Keys.Address(), Dictionary.Values.Bool()).endCell() : null);
    builder.writeCell(source.isClaimed.size > 0 ? beginCell().storeDictDirect(source.isClaimed, Dictionary.Keys.Address(), Dictionary.Values.Bool()).endCell() : null);
    builder.writeCell(source.completedTaskCount.size > 0 ? beginCell().storeDictDirect(source.completedTaskCount, Dictionary.Keys.Address(), Dictionary.Values.BigUint(256)).endCell() : null);
    builder.writeCell(source.rewards.size > 0 ? beginCell().storeDictDirect(source.rewards, Dictionary.Keys.Address(), Dictionary.Values.BigUint(256)).endCell() : null);
    return builder.build();
}

function dictValueParserGoal(): DictionaryValue<Goal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeGoal(src)).endCell());
        },
        parse: (src) => {
            return loadGoal(src.loadRef().beginParse());
        }
    }
}

export type GoalInfo = {
    $$type: 'GoalInfo';
    id: bigint;
    name: string;
    description: string;
    requiredStake: bigint;
    creator: Address;
    completed: boolean;
    participants: Dictionary<bigint, Address>;
    goalType: bigint;
}

export function storeGoalInfo(src: GoalInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.id, 256);
        b_0.storeStringRefTail(src.name);
        b_0.storeStringRefTail(src.description);
        b_0.storeUint(src.requiredStake, 256);
        b_0.storeAddress(src.creator);
        b_0.storeBit(src.completed);
        let b_1 = new Builder();
        b_1.storeDict(src.participants, Dictionary.Keys.BigUint(256), Dictionary.Values.Address());
        b_1.storeInt(src.goalType, 257);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadGoalInfo(slice: Slice) {
    let sc_0 = slice;
    let _id = sc_0.loadUintBig(256);
    let _name = sc_0.loadStringRefTail();
    let _description = sc_0.loadStringRefTail();
    let _requiredStake = sc_0.loadUintBig(256);
    let _creator = sc_0.loadAddress();
    let _completed = sc_0.loadBit();
    let sc_1 = sc_0.loadRef().beginParse();
    let _participants = Dictionary.load(Dictionary.Keys.BigUint(256), Dictionary.Values.Address(), sc_1);
    let _goalType = sc_1.loadIntBig(257);
    return { $$type: 'GoalInfo' as const, id: _id, name: _name, description: _description, requiredStake: _requiredStake, creator: _creator, completed: _completed, participants: _participants, goalType: _goalType };
}

function loadTupleGoalInfo(source: TupleReader) {
    let _id = source.readBigNumber();
    let _name = source.readString();
    let _description = source.readString();
    let _requiredStake = source.readBigNumber();
    let _creator = source.readAddress();
    let _completed = source.readBoolean();
    let _participants = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.Address(), source.readCellOpt());
    let _goalType = source.readBigNumber();
    return { $$type: 'GoalInfo' as const, id: _id, name: _name, description: _description, requiredStake: _requiredStake, creator: _creator, completed: _completed, participants: _participants, goalType: _goalType };
}

function loadGetterTupleGoalInfo(source: TupleReader) {
    let _id = source.readBigNumber();
    let _name = source.readString();
    let _description = source.readString();
    let _requiredStake = source.readBigNumber();
    let _creator = source.readAddress();
    let _completed = source.readBoolean();
    let _participants = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.Address(), source.readCellOpt());
    let _goalType = source.readBigNumber();
    return { $$type: 'GoalInfo' as const, id: _id, name: _name, description: _description, requiredStake: _requiredStake, creator: _creator, completed: _completed, participants: _participants, goalType: _goalType };
}

function storeTupleGoalInfo(source: GoalInfo) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.id);
    builder.writeString(source.name);
    builder.writeString(source.description);
    builder.writeNumber(source.requiredStake);
    builder.writeAddress(source.creator);
    builder.writeBoolean(source.completed);
    builder.writeCell(source.participants.size > 0 ? beginCell().storeDictDirect(source.participants, Dictionary.Keys.BigUint(256), Dictionary.Values.Address()).endCell() : null);
    builder.writeNumber(source.goalType);
    return builder.build();
}

function dictValueParserGoalInfo(): DictionaryValue<GoalInfo> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeGoalInfo(src)).endCell());
        },
        parse: (src) => {
            return loadGoalInfo(src.loadRef().beginParse());
        }
    }
}

export type Task = {
    $$type: 'Task';
    id: string;
    name: string;
    completed: boolean;
    projectId: string;
    taskCompleter: Address;
}

export function storeTask(src: Task) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeStringRefTail(src.id);
        b_0.storeStringRefTail(src.name);
        b_0.storeBit(src.completed);
        b_0.storeStringRefTail(src.projectId);
        b_0.storeAddress(src.taskCompleter);
    };
}

export function loadTask(slice: Slice) {
    let sc_0 = slice;
    let _id = sc_0.loadStringRefTail();
    let _name = sc_0.loadStringRefTail();
    let _completed = sc_0.loadBit();
    let _projectId = sc_0.loadStringRefTail();
    let _taskCompleter = sc_0.loadAddress();
    return { $$type: 'Task' as const, id: _id, name: _name, completed: _completed, projectId: _projectId, taskCompleter: _taskCompleter };
}

function loadTupleTask(source: TupleReader) {
    let _id = source.readString();
    let _name = source.readString();
    let _completed = source.readBoolean();
    let _projectId = source.readString();
    let _taskCompleter = source.readAddress();
    return { $$type: 'Task' as const, id: _id, name: _name, completed: _completed, projectId: _projectId, taskCompleter: _taskCompleter };
}

function loadGetterTupleTask(source: TupleReader) {
    let _id = source.readString();
    let _name = source.readString();
    let _completed = source.readBoolean();
    let _projectId = source.readString();
    let _taskCompleter = source.readAddress();
    return { $$type: 'Task' as const, id: _id, name: _name, completed: _completed, projectId: _projectId, taskCompleter: _taskCompleter };
}

function storeTupleTask(source: Task) {
    let builder = new TupleBuilder();
    builder.writeString(source.id);
    builder.writeString(source.name);
    builder.writeBoolean(source.completed);
    builder.writeString(source.projectId);
    builder.writeAddress(source.taskCompleter);
    return builder.build();
}

function dictValueParserTask(): DictionaryValue<Task> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTask(src)).endCell());
        },
        parse: (src) => {
            return loadTask(src.loadRef().beginParse());
        }
    }
}

export type Project = {
    $$type: 'Project';
    id: string;
    userPoints: Dictionary<Address, bigint>;
    participants: Dictionary<bigint, Address>;
    participantsCount: bigint;
}

export function storeProject(src: Project) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeStringRefTail(src.id);
        b_0.storeDict(src.userPoints, Dictionary.Keys.Address(), Dictionary.Values.BigUint(256));
        b_0.storeDict(src.participants, Dictionary.Keys.BigUint(256), Dictionary.Values.Address());
        b_0.storeUint(src.participantsCount, 256);
    };
}

export function loadProject(slice: Slice) {
    let sc_0 = slice;
    let _id = sc_0.loadStringRefTail();
    let _userPoints = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), sc_0);
    let _participants = Dictionary.load(Dictionary.Keys.BigUint(256), Dictionary.Values.Address(), sc_0);
    let _participantsCount = sc_0.loadUintBig(256);
    return { $$type: 'Project' as const, id: _id, userPoints: _userPoints, participants: _participants, participantsCount: _participantsCount };
}

function loadTupleProject(source: TupleReader) {
    let _id = source.readString();
    let _userPoints = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _participants = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.Address(), source.readCellOpt());
    let _participantsCount = source.readBigNumber();
    return { $$type: 'Project' as const, id: _id, userPoints: _userPoints, participants: _participants, participantsCount: _participantsCount };
}

function loadGetterTupleProject(source: TupleReader) {
    let _id = source.readString();
    let _userPoints = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _participants = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.Address(), source.readCellOpt());
    let _participantsCount = source.readBigNumber();
    return { $$type: 'Project' as const, id: _id, userPoints: _userPoints, participants: _participants, participantsCount: _participantsCount };
}

function storeTupleProject(source: Project) {
    let builder = new TupleBuilder();
    builder.writeString(source.id);
    builder.writeCell(source.userPoints.size > 0 ? beginCell().storeDictDirect(source.userPoints, Dictionary.Keys.Address(), Dictionary.Values.BigUint(256)).endCell() : null);
    builder.writeCell(source.participants.size > 0 ? beginCell().storeDictDirect(source.participants, Dictionary.Keys.BigUint(256), Dictionary.Values.Address()).endCell() : null);
    builder.writeNumber(source.participantsCount);
    return builder.build();
}

function dictValueParserProject(): DictionaryValue<Project> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeProject(src)).endCell());
        },
        parse: (src) => {
            return loadProject(src.loadRef().beginParse());
        }
    }
}

export type UserGoals = {
    $$type: 'UserGoals';
    address: Address;
    goals: Dictionary<bigint, bigint>;
    goalsLen: bigint;
}

export function storeUserGoals(src: UserGoals) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.address);
        b_0.storeDict(src.goals, Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256));
        b_0.storeUint(src.goalsLen, 256);
    };
}

export function loadUserGoals(slice: Slice) {
    let sc_0 = slice;
    let _address = sc_0.loadAddress();
    let _goals = Dictionary.load(Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256), sc_0);
    let _goalsLen = sc_0.loadUintBig(256);
    return { $$type: 'UserGoals' as const, address: _address, goals: _goals, goalsLen: _goalsLen };
}

function loadTupleUserGoals(source: TupleReader) {
    let _address = source.readAddress();
    let _goals = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _goalsLen = source.readBigNumber();
    return { $$type: 'UserGoals' as const, address: _address, goals: _goals, goalsLen: _goalsLen };
}

function loadGetterTupleUserGoals(source: TupleReader) {
    let _address = source.readAddress();
    let _goals = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _goalsLen = source.readBigNumber();
    return { $$type: 'UserGoals' as const, address: _address, goals: _goals, goalsLen: _goalsLen };
}

function storeTupleUserGoals(source: UserGoals) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.address);
    builder.writeCell(source.goals.size > 0 ? beginCell().storeDictDirect(source.goals, Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256)).endCell() : null);
    builder.writeNumber(source.goalsLen);
    return builder.build();
}

function dictValueParserUserGoals(): DictionaryValue<UserGoals> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeUserGoals(src)).endCell());
        },
        parse: (src) => {
            return loadUserGoals(src.loadRef().beginParse());
        }
    }
}

export type CompletedTasks = {
    $$type: 'CompletedTasks';
    address: Address;
    tasks: Dictionary<bigint, bigint>;
    tasksLen: bigint;
}

export function storeCompletedTasks(src: CompletedTasks) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.address);
        b_0.storeDict(src.tasks, Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256));
        b_0.storeUint(src.tasksLen, 256);
    };
}

export function loadCompletedTasks(slice: Slice) {
    let sc_0 = slice;
    let _address = sc_0.loadAddress();
    let _tasks = Dictionary.load(Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256), sc_0);
    let _tasksLen = sc_0.loadUintBig(256);
    return { $$type: 'CompletedTasks' as const, address: _address, tasks: _tasks, tasksLen: _tasksLen };
}

function loadTupleCompletedTasks(source: TupleReader) {
    let _address = source.readAddress();
    let _tasks = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _tasksLen = source.readBigNumber();
    return { $$type: 'CompletedTasks' as const, address: _address, tasks: _tasks, tasksLen: _tasksLen };
}

function loadGetterTupleCompletedTasks(source: TupleReader) {
    let _address = source.readAddress();
    let _tasks = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _tasksLen = source.readBigNumber();
    return { $$type: 'CompletedTasks' as const, address: _address, tasks: _tasks, tasksLen: _tasksLen };
}

function storeTupleCompletedTasks(source: CompletedTasks) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.address);
    builder.writeCell(source.tasks.size > 0 ? beginCell().storeDictDirect(source.tasks, Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256)).endCell() : null);
    builder.writeNumber(source.tasksLen);
    return builder.build();
}

function dictValueParserCompletedTasks(): DictionaryValue<CompletedTasks> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCompletedTasks(src)).endCell());
        },
        parse: (src) => {
            return loadCompletedTasks(src.loadRef().beginParse());
        }
    }
}

export type GithubUser = {
    $$type: 'GithubUser';
    githubUsername: string;
}

export function storeGithubUser(src: GithubUser) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeStringRefTail(src.githubUsername);
    };
}

export function loadGithubUser(slice: Slice) {
    let sc_0 = slice;
    let _githubUsername = sc_0.loadStringRefTail();
    return { $$type: 'GithubUser' as const, githubUsername: _githubUsername };
}

function loadTupleGithubUser(source: TupleReader) {
    let _githubUsername = source.readString();
    return { $$type: 'GithubUser' as const, githubUsername: _githubUsername };
}

function loadGetterTupleGithubUser(source: TupleReader) {
    let _githubUsername = source.readString();
    return { $$type: 'GithubUser' as const, githubUsername: _githubUsername };
}

function storeTupleGithubUser(source: GithubUser) {
    let builder = new TupleBuilder();
    builder.writeString(source.githubUsername);
    return builder.build();
}

function dictValueParserGithubUser(): DictionaryValue<GithubUser> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeGithubUser(src)).endCell());
        },
        parse: (src) => {
            return loadGithubUser(src.loadRef().beginParse());
        }
    }
}

export type LinkWallet = {
    $$type: 'LinkWallet';
    address: Address;
    github: string;
}

export function storeLinkWallet(src: LinkWallet) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1864514037, 32);
        b_0.storeAddress(src.address);
        b_0.storeStringRefTail(src.github);
    };
}

export function loadLinkWallet(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1864514037) { throw Error('Invalid prefix'); }
    let _address = sc_0.loadAddress();
    let _github = sc_0.loadStringRefTail();
    return { $$type: 'LinkWallet' as const, address: _address, github: _github };
}

function loadTupleLinkWallet(source: TupleReader) {
    let _address = source.readAddress();
    let _github = source.readString();
    return { $$type: 'LinkWallet' as const, address: _address, github: _github };
}

function loadGetterTupleLinkWallet(source: TupleReader) {
    let _address = source.readAddress();
    let _github = source.readString();
    return { $$type: 'LinkWallet' as const, address: _address, github: _github };
}

function storeTupleLinkWallet(source: LinkWallet) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.address);
    builder.writeString(source.github);
    return builder.build();
}

function dictValueParserLinkWallet(): DictionaryValue<LinkWallet> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeLinkWallet(src)).endCell());
        },
        parse: (src) => {
            return loadLinkWallet(src.loadRef().beginParse());
        }
    }
}

export type CreateGoal = {
    $$type: 'CreateGoal';
    goalType: bigint;
    name: string;
    description: string;
    requiredStake: bigint;
    taskCount: bigint;
}

export function storeCreateGoal(src: CreateGoal) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2583046920, 32);
        b_0.storeInt(src.goalType, 257);
        b_0.storeStringRefTail(src.name);
        b_0.storeStringRefTail(src.description);
        b_0.storeInt(src.requiredStake, 257);
        b_0.storeInt(src.taskCount, 257);
    };
}

export function loadCreateGoal(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2583046920) { throw Error('Invalid prefix'); }
    let _goalType = sc_0.loadIntBig(257);
    let _name = sc_0.loadStringRefTail();
    let _description = sc_0.loadStringRefTail();
    let _requiredStake = sc_0.loadIntBig(257);
    let _taskCount = sc_0.loadIntBig(257);
    return { $$type: 'CreateGoal' as const, goalType: _goalType, name: _name, description: _description, requiredStake: _requiredStake, taskCount: _taskCount };
}

function loadTupleCreateGoal(source: TupleReader) {
    let _goalType = source.readBigNumber();
    let _name = source.readString();
    let _description = source.readString();
    let _requiredStake = source.readBigNumber();
    let _taskCount = source.readBigNumber();
    return { $$type: 'CreateGoal' as const, goalType: _goalType, name: _name, description: _description, requiredStake: _requiredStake, taskCount: _taskCount };
}

function loadGetterTupleCreateGoal(source: TupleReader) {
    let _goalType = source.readBigNumber();
    let _name = source.readString();
    let _description = source.readString();
    let _requiredStake = source.readBigNumber();
    let _taskCount = source.readBigNumber();
    return { $$type: 'CreateGoal' as const, goalType: _goalType, name: _name, description: _description, requiredStake: _requiredStake, taskCount: _taskCount };
}

function storeTupleCreateGoal(source: CreateGoal) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.goalType);
    builder.writeString(source.name);
    builder.writeString(source.description);
    builder.writeNumber(source.requiredStake);
    builder.writeNumber(source.taskCount);
    return builder.build();
}

function dictValueParserCreateGoal(): DictionaryValue<CreateGoal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCreateGoal(src)).endCell());
        },
        parse: (src) => {
            return loadCreateGoal(src.loadRef().beginParse());
        }
    }
}

export type StakeAndUnlockGoal = {
    $$type: 'StakeAndUnlockGoal';
    goalId: bigint;
}

export function storeStakeAndUnlockGoal(src: StakeAndUnlockGoal) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1577787111, 32);
        b_0.storeInt(src.goalId, 257);
    };
}

export function loadStakeAndUnlockGoal(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1577787111) { throw Error('Invalid prefix'); }
    let _goalId = sc_0.loadIntBig(257);
    return { $$type: 'StakeAndUnlockGoal' as const, goalId: _goalId };
}

function loadTupleStakeAndUnlockGoal(source: TupleReader) {
    let _goalId = source.readBigNumber();
    return { $$type: 'StakeAndUnlockGoal' as const, goalId: _goalId };
}

function loadGetterTupleStakeAndUnlockGoal(source: TupleReader) {
    let _goalId = source.readBigNumber();
    return { $$type: 'StakeAndUnlockGoal' as const, goalId: _goalId };
}

function storeTupleStakeAndUnlockGoal(source: StakeAndUnlockGoal) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.goalId);
    return builder.build();
}

function dictValueParserStakeAndUnlockGoal(): DictionaryValue<StakeAndUnlockGoal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStakeAndUnlockGoal(src)).endCell());
        },
        parse: (src) => {
            return loadStakeAndUnlockGoal(src.loadRef().beginParse());
        }
    }
}

export type ConfirmTaskCompletion = {
    $$type: 'ConfirmTaskCompletion';
    goalId: bigint;
    user: Address;
}

export function storeConfirmTaskCompletion(src: ConfirmTaskCompletion) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2551293740, 32);
        b_0.storeInt(src.goalId, 257);
        b_0.storeAddress(src.user);
    };
}

export function loadConfirmTaskCompletion(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2551293740) { throw Error('Invalid prefix'); }
    let _goalId = sc_0.loadIntBig(257);
    let _user = sc_0.loadAddress();
    return { $$type: 'ConfirmTaskCompletion' as const, goalId: _goalId, user: _user };
}

function loadTupleConfirmTaskCompletion(source: TupleReader) {
    let _goalId = source.readBigNumber();
    let _user = source.readAddress();
    return { $$type: 'ConfirmTaskCompletion' as const, goalId: _goalId, user: _user };
}

function loadGetterTupleConfirmTaskCompletion(source: TupleReader) {
    let _goalId = source.readBigNumber();
    let _user = source.readAddress();
    return { $$type: 'ConfirmTaskCompletion' as const, goalId: _goalId, user: _user };
}

function storeTupleConfirmTaskCompletion(source: ConfirmTaskCompletion) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.goalId);
    builder.writeAddress(source.user);
    return builder.build();
}

function dictValueParserConfirmTaskCompletion(): DictionaryValue<ConfirmTaskCompletion> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeConfirmTaskCompletion(src)).endCell());
        },
        parse: (src) => {
            return loadConfirmTaskCompletion(src.loadRef().beginParse());
        }
    }
}

export type ClaimStake = {
    $$type: 'ClaimStake';
    goalId: bigint;
}

export function storeClaimStake(src: ClaimStake) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1909137102, 32);
        b_0.storeInt(src.goalId, 257);
    };
}

export function loadClaimStake(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1909137102) { throw Error('Invalid prefix'); }
    let _goalId = sc_0.loadIntBig(257);
    return { $$type: 'ClaimStake' as const, goalId: _goalId };
}

function loadTupleClaimStake(source: TupleReader) {
    let _goalId = source.readBigNumber();
    return { $$type: 'ClaimStake' as const, goalId: _goalId };
}

function loadGetterTupleClaimStake(source: TupleReader) {
    let _goalId = source.readBigNumber();
    return { $$type: 'ClaimStake' as const, goalId: _goalId };
}

function storeTupleClaimStake(source: ClaimStake) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.goalId);
    return builder.build();
}

function dictValueParserClaimStake(): DictionaryValue<ClaimStake> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeClaimStake(src)).endCell());
        },
        parse: (src) => {
            return loadClaimStake(src.loadRef().beginParse());
        }
    }
}

export type SettleGoal = {
    $$type: 'SettleGoal';
    goalId: bigint;
}

export function storeSettleGoal(src: SettleGoal) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(785101705, 32);
        b_0.storeInt(src.goalId, 257);
    };
}

export function loadSettleGoal(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 785101705) { throw Error('Invalid prefix'); }
    let _goalId = sc_0.loadIntBig(257);
    return { $$type: 'SettleGoal' as const, goalId: _goalId };
}

function loadTupleSettleGoal(source: TupleReader) {
    let _goalId = source.readBigNumber();
    return { $$type: 'SettleGoal' as const, goalId: _goalId };
}

function loadGetterTupleSettleGoal(source: TupleReader) {
    let _goalId = source.readBigNumber();
    return { $$type: 'SettleGoal' as const, goalId: _goalId };
}

function storeTupleSettleGoal(source: SettleGoal) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.goalId);
    return builder.build();
}

function dictValueParserSettleGoal(): DictionaryValue<SettleGoal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSettleGoal(src)).endCell());
        },
        parse: (src) => {
            return loadSettleGoal(src.loadRef().beginParse());
        }
    }
}

export type CreateProject = {
    $$type: 'CreateProject';
    projectId: string;
    name: string;
}

export function storeCreateProject(src: CreateProject) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4157679283, 32);
        b_0.storeStringRefTail(src.projectId);
        b_0.storeStringRefTail(src.name);
    };
}

export function loadCreateProject(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4157679283) { throw Error('Invalid prefix'); }
    let _projectId = sc_0.loadStringRefTail();
    let _name = sc_0.loadStringRefTail();
    return { $$type: 'CreateProject' as const, projectId: _projectId, name: _name };
}

function loadTupleCreateProject(source: TupleReader) {
    let _projectId = source.readString();
    let _name = source.readString();
    return { $$type: 'CreateProject' as const, projectId: _projectId, name: _name };
}

function loadGetterTupleCreateProject(source: TupleReader) {
    let _projectId = source.readString();
    let _name = source.readString();
    return { $$type: 'CreateProject' as const, projectId: _projectId, name: _name };
}

function storeTupleCreateProject(source: CreateProject) {
    let builder = new TupleBuilder();
    builder.writeString(source.projectId);
    builder.writeString(source.name);
    return builder.build();
}

function dictValueParserCreateProject(): DictionaryValue<CreateProject> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCreateProject(src)).endCell());
        },
        parse: (src) => {
            return loadCreateProject(src.loadRef().beginParse());
        }
    }
}

export type CreateTask = {
    $$type: 'CreateTask';
    id: string;
    name: string;
    projectId: string;
}

export function storeCreateTask(src: CreateTask) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2787876066, 32);
        b_0.storeStringRefTail(src.id);
        b_0.storeStringRefTail(src.name);
        b_0.storeStringRefTail(src.projectId);
    };
}

export function loadCreateTask(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2787876066) { throw Error('Invalid prefix'); }
    let _id = sc_0.loadStringRefTail();
    let _name = sc_0.loadStringRefTail();
    let _projectId = sc_0.loadStringRefTail();
    return { $$type: 'CreateTask' as const, id: _id, name: _name, projectId: _projectId };
}

function loadTupleCreateTask(source: TupleReader) {
    let _id = source.readString();
    let _name = source.readString();
    let _projectId = source.readString();
    return { $$type: 'CreateTask' as const, id: _id, name: _name, projectId: _projectId };
}

function loadGetterTupleCreateTask(source: TupleReader) {
    let _id = source.readString();
    let _name = source.readString();
    let _projectId = source.readString();
    return { $$type: 'CreateTask' as const, id: _id, name: _name, projectId: _projectId };
}

function storeTupleCreateTask(source: CreateTask) {
    let builder = new TupleBuilder();
    builder.writeString(source.id);
    builder.writeString(source.name);
    builder.writeString(source.projectId);
    return builder.build();
}

function dictValueParserCreateTask(): DictionaryValue<CreateTask> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCreateTask(src)).endCell());
        },
        parse: (src) => {
            return loadCreateTask(src.loadRef().beginParse());
        }
    }
}

export type ConfirmTask = {
    $$type: 'ConfirmTask';
    taskId: string;
    github: string;
    taskPoints: bigint;
}

export function storeConfirmTask(src: ConfirmTask) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(767560509, 32);
        b_0.storeStringRefTail(src.taskId);
        b_0.storeStringRefTail(src.github);
        b_0.storeInt(src.taskPoints, 257);
    };
}

export function loadConfirmTask(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 767560509) { throw Error('Invalid prefix'); }
    let _taskId = sc_0.loadStringRefTail();
    let _github = sc_0.loadStringRefTail();
    let _taskPoints = sc_0.loadIntBig(257);
    return { $$type: 'ConfirmTask' as const, taskId: _taskId, github: _github, taskPoints: _taskPoints };
}

function loadTupleConfirmTask(source: TupleReader) {
    let _taskId = source.readString();
    let _github = source.readString();
    let _taskPoints = source.readBigNumber();
    return { $$type: 'ConfirmTask' as const, taskId: _taskId, github: _github, taskPoints: _taskPoints };
}

function loadGetterTupleConfirmTask(source: TupleReader) {
    let _taskId = source.readString();
    let _github = source.readString();
    let _taskPoints = source.readBigNumber();
    return { $$type: 'ConfirmTask' as const, taskId: _taskId, github: _github, taskPoints: _taskPoints };
}

function storeTupleConfirmTask(source: ConfirmTask) {
    let builder = new TupleBuilder();
    builder.writeString(source.taskId);
    builder.writeString(source.github);
    builder.writeNumber(source.taskPoints);
    return builder.build();
}

function dictValueParserConfirmTask(): DictionaryValue<ConfirmTask> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeConfirmTask(src)).endCell());
        },
        parse: (src) => {
            return loadConfirmTask(src.loadRef().beginParse());
        }
    }
}

export type DonateToProject = {
    $$type: 'DonateToProject';
    projectId: string;
    amount: bigint;
}

export function storeDonateToProject(src: DonateToProject) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2142086217, 32);
        b_0.storeStringRefTail(src.projectId);
        b_0.storeInt(src.amount, 257);
    };
}

export function loadDonateToProject(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2142086217) { throw Error('Invalid prefix'); }
    let _projectId = sc_0.loadStringRefTail();
    let _amount = sc_0.loadIntBig(257);
    return { $$type: 'DonateToProject' as const, projectId: _projectId, amount: _amount };
}

function loadTupleDonateToProject(source: TupleReader) {
    let _projectId = source.readString();
    let _amount = source.readBigNumber();
    return { $$type: 'DonateToProject' as const, projectId: _projectId, amount: _amount };
}

function loadGetterTupleDonateToProject(source: TupleReader) {
    let _projectId = source.readString();
    let _amount = source.readBigNumber();
    return { $$type: 'DonateToProject' as const, projectId: _projectId, amount: _amount };
}

function storeTupleDonateToProject(source: DonateToProject) {
    let builder = new TupleBuilder();
    builder.writeString(source.projectId);
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserDonateToProject(): DictionaryValue<DonateToProject> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDonateToProject(src)).endCell());
        },
        parse: (src) => {
            return loadDonateToProject(src.loadRef().beginParse());
        }
    }
}

export type ClaimReward = {
    $$type: 'ClaimReward';
    projectId: string;
}

export function storeClaimReward(src: ClaimReward) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1207586151, 32);
        b_0.storeStringRefTail(src.projectId);
    };
}

export function loadClaimReward(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1207586151) { throw Error('Invalid prefix'); }
    let _projectId = sc_0.loadStringRefTail();
    return { $$type: 'ClaimReward' as const, projectId: _projectId };
}

function loadTupleClaimReward(source: TupleReader) {
    let _projectId = source.readString();
    return { $$type: 'ClaimReward' as const, projectId: _projectId };
}

function loadGetterTupleClaimReward(source: TupleReader) {
    let _projectId = source.readString();
    return { $$type: 'ClaimReward' as const, projectId: _projectId };
}

function storeTupleClaimReward(source: ClaimReward) {
    let builder = new TupleBuilder();
    builder.writeString(source.projectId);
    return builder.build();
}

function dictValueParserClaimReward(): DictionaryValue<ClaimReward> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeClaimReward(src)).endCell());
        },
        parse: (src) => {
            return loadClaimReward(src.loadRef().beginParse());
        }
    }
}

export type Bet$Data = {
    $$type: 'Bet$Data';
    owner: Address;
    goals: Dictionary<bigint, Goal>;
    goalsLen: bigint;
    tasks: Dictionary<bigint, Task>;
    tasksLen: bigint;
    taskIndices: Dictionary<bigint, bigint>;
    userGoals: Dictionary<Address, UserGoals>;
    walletToGithub: Dictionary<Address, GithubUser>;
    githubToWallet: Dictionary<bigint, Address>;
    userPoints: Dictionary<Address, bigint>;
    userCompletedTasks: Dictionary<Address, CompletedTasks>;
    projects: Dictionary<bigint, Project>;
    projectIds: Dictionary<bigint, bigint>;
    projectCount: bigint;
    totalRewards: Dictionary<Address, bigint>;
    claimedRewards: Dictionary<Address, bigint>;
}

export function storeBet$Data(src: Bet$Data) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.owner);
        b_0.storeDict(src.goals, Dictionary.Keys.BigUint(256), dictValueParserGoal());
        b_0.storeUint(src.goalsLen, 256);
        b_0.storeDict(src.tasks, Dictionary.Keys.BigUint(256), dictValueParserTask());
        b_0.storeUint(src.tasksLen, 256);
        let b_1 = new Builder();
        b_1.storeDict(src.taskIndices, Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256));
        b_1.storeDict(src.userGoals, Dictionary.Keys.Address(), dictValueParserUserGoals());
        b_1.storeDict(src.walletToGithub, Dictionary.Keys.Address(), dictValueParserGithubUser());
        let b_2 = new Builder();
        b_2.storeDict(src.githubToWallet, Dictionary.Keys.BigUint(256), Dictionary.Values.Address());
        b_2.storeDict(src.userPoints, Dictionary.Keys.Address(), Dictionary.Values.BigUint(256));
        b_2.storeDict(src.userCompletedTasks, Dictionary.Keys.Address(), dictValueParserCompletedTasks());
        let b_3 = new Builder();
        b_3.storeDict(src.projects, Dictionary.Keys.BigUint(256), dictValueParserProject());
        b_3.storeDict(src.projectIds, Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256));
        b_3.storeUint(src.projectCount, 256);
        b_3.storeDict(src.totalRewards, Dictionary.Keys.Address(), Dictionary.Values.BigUint(256));
        b_3.storeDict(src.claimedRewards, Dictionary.Keys.Address(), Dictionary.Values.BigUint(256));
        b_2.storeRef(b_3.endCell());
        b_1.storeRef(b_2.endCell());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadBet$Data(slice: Slice) {
    let sc_0 = slice;
    let _owner = sc_0.loadAddress();
    let _goals = Dictionary.load(Dictionary.Keys.BigUint(256), dictValueParserGoal(), sc_0);
    let _goalsLen = sc_0.loadUintBig(256);
    let _tasks = Dictionary.load(Dictionary.Keys.BigUint(256), dictValueParserTask(), sc_0);
    let _tasksLen = sc_0.loadUintBig(256);
    let sc_1 = sc_0.loadRef().beginParse();
    let _taskIndices = Dictionary.load(Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256), sc_1);
    let _userGoals = Dictionary.load(Dictionary.Keys.Address(), dictValueParserUserGoals(), sc_1);
    let _walletToGithub = Dictionary.load(Dictionary.Keys.Address(), dictValueParserGithubUser(), sc_1);
    let sc_2 = sc_1.loadRef().beginParse();
    let _githubToWallet = Dictionary.load(Dictionary.Keys.BigUint(256), Dictionary.Values.Address(), sc_2);
    let _userPoints = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), sc_2);
    let _userCompletedTasks = Dictionary.load(Dictionary.Keys.Address(), dictValueParserCompletedTasks(), sc_2);
    let sc_3 = sc_2.loadRef().beginParse();
    let _projects = Dictionary.load(Dictionary.Keys.BigUint(256), dictValueParserProject(), sc_3);
    let _projectIds = Dictionary.load(Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256), sc_3);
    let _projectCount = sc_3.loadUintBig(256);
    let _totalRewards = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), sc_3);
    let _claimedRewards = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), sc_3);
    return { $$type: 'Bet$Data' as const, owner: _owner, goals: _goals, goalsLen: _goalsLen, tasks: _tasks, tasksLen: _tasksLen, taskIndices: _taskIndices, userGoals: _userGoals, walletToGithub: _walletToGithub, githubToWallet: _githubToWallet, userPoints: _userPoints, userCompletedTasks: _userCompletedTasks, projects: _projects, projectIds: _projectIds, projectCount: _projectCount, totalRewards: _totalRewards, claimedRewards: _claimedRewards };
}

function loadTupleBet$Data(source: TupleReader) {
    let _owner = source.readAddress();
    let _goals = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), dictValueParserGoal(), source.readCellOpt());
    let _goalsLen = source.readBigNumber();
    let _tasks = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), dictValueParserTask(), source.readCellOpt());
    let _tasksLen = source.readBigNumber();
    let _taskIndices = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _userGoals = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserUserGoals(), source.readCellOpt());
    let _walletToGithub = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserGithubUser(), source.readCellOpt());
    let _githubToWallet = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.Address(), source.readCellOpt());
    let _userPoints = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _userCompletedTasks = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserCompletedTasks(), source.readCellOpt());
    let _projects = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), dictValueParserProject(), source.readCellOpt());
    let _projectIds = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _projectCount = source.readBigNumber();
    source = source.readTuple();
    let _totalRewards = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _claimedRewards = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), source.readCellOpt());
    return { $$type: 'Bet$Data' as const, owner: _owner, goals: _goals, goalsLen: _goalsLen, tasks: _tasks, tasksLen: _tasksLen, taskIndices: _taskIndices, userGoals: _userGoals, walletToGithub: _walletToGithub, githubToWallet: _githubToWallet, userPoints: _userPoints, userCompletedTasks: _userCompletedTasks, projects: _projects, projectIds: _projectIds, projectCount: _projectCount, totalRewards: _totalRewards, claimedRewards: _claimedRewards };
}

function loadGetterTupleBet$Data(source: TupleReader) {
    let _owner = source.readAddress();
    let _goals = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), dictValueParserGoal(), source.readCellOpt());
    let _goalsLen = source.readBigNumber();
    let _tasks = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), dictValueParserTask(), source.readCellOpt());
    let _tasksLen = source.readBigNumber();
    let _taskIndices = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _userGoals = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserUserGoals(), source.readCellOpt());
    let _walletToGithub = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserGithubUser(), source.readCellOpt());
    let _githubToWallet = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.Address(), source.readCellOpt());
    let _userPoints = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _userCompletedTasks = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserCompletedTasks(), source.readCellOpt());
    let _projects = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), dictValueParserProject(), source.readCellOpt());
    let _projectIds = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _projectCount = source.readBigNumber();
    let _totalRewards = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), source.readCellOpt());
    let _claimedRewards = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigUint(256), source.readCellOpt());
    return { $$type: 'Bet$Data' as const, owner: _owner, goals: _goals, goalsLen: _goalsLen, tasks: _tasks, tasksLen: _tasksLen, taskIndices: _taskIndices, userGoals: _userGoals, walletToGithub: _walletToGithub, githubToWallet: _githubToWallet, userPoints: _userPoints, userCompletedTasks: _userCompletedTasks, projects: _projects, projectIds: _projectIds, projectCount: _projectCount, totalRewards: _totalRewards, claimedRewards: _claimedRewards };
}

function storeTupleBet$Data(source: Bet$Data) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeCell(source.goals.size > 0 ? beginCell().storeDictDirect(source.goals, Dictionary.Keys.BigUint(256), dictValueParserGoal()).endCell() : null);
    builder.writeNumber(source.goalsLen);
    builder.writeCell(source.tasks.size > 0 ? beginCell().storeDictDirect(source.tasks, Dictionary.Keys.BigUint(256), dictValueParserTask()).endCell() : null);
    builder.writeNumber(source.tasksLen);
    builder.writeCell(source.taskIndices.size > 0 ? beginCell().storeDictDirect(source.taskIndices, Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256)).endCell() : null);
    builder.writeCell(source.userGoals.size > 0 ? beginCell().storeDictDirect(source.userGoals, Dictionary.Keys.Address(), dictValueParserUserGoals()).endCell() : null);
    builder.writeCell(source.walletToGithub.size > 0 ? beginCell().storeDictDirect(source.walletToGithub, Dictionary.Keys.Address(), dictValueParserGithubUser()).endCell() : null);
    builder.writeCell(source.githubToWallet.size > 0 ? beginCell().storeDictDirect(source.githubToWallet, Dictionary.Keys.BigUint(256), Dictionary.Values.Address()).endCell() : null);
    builder.writeCell(source.userPoints.size > 0 ? beginCell().storeDictDirect(source.userPoints, Dictionary.Keys.Address(), Dictionary.Values.BigUint(256)).endCell() : null);
    builder.writeCell(source.userCompletedTasks.size > 0 ? beginCell().storeDictDirect(source.userCompletedTasks, Dictionary.Keys.Address(), dictValueParserCompletedTasks()).endCell() : null);
    builder.writeCell(source.projects.size > 0 ? beginCell().storeDictDirect(source.projects, Dictionary.Keys.BigUint(256), dictValueParserProject()).endCell() : null);
    builder.writeCell(source.projectIds.size > 0 ? beginCell().storeDictDirect(source.projectIds, Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256)).endCell() : null);
    builder.writeNumber(source.projectCount);
    builder.writeCell(source.totalRewards.size > 0 ? beginCell().storeDictDirect(source.totalRewards, Dictionary.Keys.Address(), Dictionary.Values.BigUint(256)).endCell() : null);
    builder.writeCell(source.claimedRewards.size > 0 ? beginCell().storeDictDirect(source.claimedRewards, Dictionary.Keys.Address(), Dictionary.Values.BigUint(256)).endCell() : null);
    return builder.build();
}

function dictValueParserBet$Data(): DictionaryValue<Bet$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBet$Data(src)).endCell());
        },
        parse: (src) => {
            return loadBet$Data(src.loadRef().beginParse());
        }
    }
}

 type Bet_init_args = {
    $$type: 'Bet_init_args';
    owner: Address;
}

function initBet_init_args(src: Bet_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.owner);
    };
}

async function Bet_init(owner: Address) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initBet_init_args({ $$type: 'Bet_init_args', owner })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Bet_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    11: { message: `'Unknown' error` },
    12: { message: `Fatal error` },
    13: { message: `Out of gas error` },
    14: { message: `Virtualization error` },
    32: { message: `Action list is invalid` },
    33: { message: `Action list is too long` },
    34: { message: `Action is invalid or not supported` },
    35: { message: `Invalid source address in outbound message` },
    36: { message: `Invalid destination address in outbound message` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    39: { message: `Outbound message does not fit into a cell after rewriting` },
    40: { message: `Cannot process a message` },
    41: { message: `Library reference is null` },
    42: { message: `Library change action error` },
    43: { message: `Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree` },
    50: { message: `Account state size exceeded limits` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    16969: { message: `Task already exists.` },
    32038: { message: `Goal does not exist.` },
    44355: { message: `Wallet already linked to a Github account` },
    50111: { message: `Project already exists.` },
}

const Bet_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"StdAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":8}},{"name":"address","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"VarAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":32}},{"name":"address","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Goal","header":null,"fields":[{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"description","type":{"kind":"simple","type":"string","optional":false}},{"name":"requiredStake","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"creator","type":{"kind":"simple","type":"address","optional":false}},{"name":"completed","type":{"kind":"simple","type":"bool","optional":false}},{"name":"participants","type":{"kind":"dict","key":"uint","keyFormat":256,"value":"address"}},{"name":"participantsCount","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"taskCount","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"goalType","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"isParticipant","type":{"kind":"dict","key":"address","value":"bool"}},{"name":"isClaimed","type":{"kind":"dict","key":"address","value":"bool"}},{"name":"completedTaskCount","type":{"kind":"dict","key":"address","value":"uint","valueFormat":256}},{"name":"rewards","type":{"kind":"dict","key":"address","value":"uint","valueFormat":256}}]},
    {"name":"GoalInfo","header":null,"fields":[{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"description","type":{"kind":"simple","type":"string","optional":false}},{"name":"requiredStake","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"creator","type":{"kind":"simple","type":"address","optional":false}},{"name":"completed","type":{"kind":"simple","type":"bool","optional":false}},{"name":"participants","type":{"kind":"dict","key":"uint","keyFormat":256,"value":"address"}},{"name":"goalType","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"Task","header":null,"fields":[{"name":"id","type":{"kind":"simple","type":"string","optional":false}},{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"completed","type":{"kind":"simple","type":"bool","optional":false}},{"name":"projectId","type":{"kind":"simple","type":"string","optional":false}},{"name":"taskCompleter","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Project","header":null,"fields":[{"name":"id","type":{"kind":"simple","type":"string","optional":false}},{"name":"userPoints","type":{"kind":"dict","key":"address","value":"uint","valueFormat":256}},{"name":"participants","type":{"kind":"dict","key":"uint","keyFormat":256,"value":"address"}},{"name":"participantsCount","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"UserGoals","header":null,"fields":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}},{"name":"goals","type":{"kind":"dict","key":"uint","keyFormat":256,"value":"uint","valueFormat":256}},{"name":"goalsLen","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"CompletedTasks","header":null,"fields":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}},{"name":"tasks","type":{"kind":"dict","key":"uint","keyFormat":256,"value":"uint","valueFormat":256}},{"name":"tasksLen","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"GithubUser","header":null,"fields":[{"name":"githubUsername","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"LinkWallet","header":1864514037,"fields":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}},{"name":"github","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"CreateGoal","header":2583046920,"fields":[{"name":"goalType","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"description","type":{"kind":"simple","type":"string","optional":false}},{"name":"requiredStake","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"taskCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"StakeAndUnlockGoal","header":1577787111,"fields":[{"name":"goalId","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"ConfirmTaskCompletion","header":2551293740,"fields":[{"name":"goalId","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"user","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimStake","header":1909137102,"fields":[{"name":"goalId","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SettleGoal","header":785101705,"fields":[{"name":"goalId","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"CreateProject","header":4157679283,"fields":[{"name":"projectId","type":{"kind":"simple","type":"string","optional":false}},{"name":"name","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"CreateTask","header":2787876066,"fields":[{"name":"id","type":{"kind":"simple","type":"string","optional":false}},{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"projectId","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"ConfirmTask","header":767560509,"fields":[{"name":"taskId","type":{"kind":"simple","type":"string","optional":false}},{"name":"github","type":{"kind":"simple","type":"string","optional":false}},{"name":"taskPoints","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"DonateToProject","header":2142086217,"fields":[{"name":"projectId","type":{"kind":"simple","type":"string","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"ClaimReward","header":1207586151,"fields":[{"name":"projectId","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"Bet$Data","header":null,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"goals","type":{"kind":"dict","key":"uint","keyFormat":256,"value":"Goal","valueFormat":"ref"}},{"name":"goalsLen","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"tasks","type":{"kind":"dict","key":"uint","keyFormat":256,"value":"Task","valueFormat":"ref"}},{"name":"tasksLen","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"taskIndices","type":{"kind":"dict","key":"uint","keyFormat":256,"value":"uint","valueFormat":256}},{"name":"userGoals","type":{"kind":"dict","key":"address","value":"UserGoals","valueFormat":"ref"}},{"name":"walletToGithub","type":{"kind":"dict","key":"address","value":"GithubUser","valueFormat":"ref"}},{"name":"githubToWallet","type":{"kind":"dict","key":"uint","keyFormat":256,"value":"address"}},{"name":"userPoints","type":{"kind":"dict","key":"address","value":"uint","valueFormat":256}},{"name":"userCompletedTasks","type":{"kind":"dict","key":"address","value":"CompletedTasks","valueFormat":"ref"}},{"name":"projects","type":{"kind":"dict","key":"uint","keyFormat":256,"value":"Project","valueFormat":"ref"}},{"name":"projectIds","type":{"kind":"dict","key":"uint","keyFormat":256,"value":"uint","valueFormat":256}},{"name":"projectCount","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"totalRewards","type":{"kind":"dict","key":"address","value":"uint","valueFormat":256}},{"name":"claimedRewards","type":{"kind":"dict","key":"address","value":"uint","valueFormat":256}}]},
]

const Bet_getters: ABIGetter[] = [
    {"name":"walletToGithub","arguments":[],"returnType":{"kind":"dict","key":"address","value":"GithubUser","valueFormat":"ref"}},
    {"name":"allGoals","arguments":[],"returnType":{"kind":"dict","key":"uint","keyFormat":256,"value":"GoalInfo","valueFormat":"ref"}},
    {"name":"userGoals","arguments":[{"name":"address","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"uint","keyFormat":256,"value":"uint","valueFormat":256}},
    {"name":"goalDetails","arguments":[{"name":"goalId","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"GoalInfo","optional":false}},
    {"name":"allTasks","arguments":[],"returnType":{"kind":"dict","key":"uint","keyFormat":256,"value":"Task","valueFormat":"ref"}},
    {"name":"unconfirmedTasks","arguments":[],"returnType":{"kind":"dict","key":"uint","keyFormat":256,"value":"Task","valueFormat":"ref"}},
    {"name":"allProjectIds","arguments":[],"returnType":{"kind":"dict","key":"uint","keyFormat":256,"value":"Project","valueFormat":"ref"}},
    {"name":"projectParticipants","arguments":[{"name":"projectId","type":{"kind":"simple","type":"string","optional":false}}],"returnType":{"kind":"dict","key":"uint","keyFormat":256,"value":"address"}},
    {"name":"projectUserPoints","arguments":[{"name":"projectId","type":{"kind":"simple","type":"string","optional":false}},{"name":"user","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"totalRewards","arguments":[{"name":"user","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"claimedRewards","arguments":[{"name":"user","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"userPoints","arguments":[{"name":"user","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"userCompletedTasks","arguments":[{"name":"user","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"uint","keyFormat":256,"value":"uint","valueFormat":256}},
    {"name":"githubByWallet","arguments":[{"name":"wallet","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"string","optional":false}},
]

export const Bet_getterMapping: { [key: string]: string } = {
    'walletToGithub': 'getWalletToGithub',
    'allGoals': 'getAllGoals',
    'userGoals': 'getUserGoals',
    'goalDetails': 'getGoalDetails',
    'allTasks': 'getAllTasks',
    'unconfirmedTasks': 'getUnconfirmedTasks',
    'allProjectIds': 'getAllProjectIds',
    'projectParticipants': 'getProjectParticipants',
    'projectUserPoints': 'getProjectUserPoints',
    'totalRewards': 'getTotalRewards',
    'claimedRewards': 'getClaimedRewards',
    'userPoints': 'getUserPoints',
    'userCompletedTasks': 'getUserCompletedTasks',
    'githubByWallet': 'getGithubByWallet',
}

const Bet_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"CreateGoal"}},
    {"receiver":"internal","message":{"kind":"typed","type":"LinkWallet"}},
    {"receiver":"internal","message":{"kind":"typed","type":"StakeAndUnlockGoal"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ConfirmTaskCompletion"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimStake"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SettleGoal"}},
    {"receiver":"internal","message":{"kind":"typed","type":"CreateProject"}},
    {"receiver":"internal","message":{"kind":"typed","type":"CreateTask"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ConfirmTask"}},
    {"receiver":"internal","message":{"kind":"typed","type":"DonateToProject"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimReward"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Bet implements Contract {
    
    static async init(owner: Address) {
        return await Bet_init(owner);
    }
    
    static async fromInit(owner: Address) {
        const init = await Bet_init(owner);
        const address = contractAddress(0, init);
        return new Bet(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Bet(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Bet_types,
        getters: Bet_getters,
        receivers: Bet_receivers,
        errors: Bet_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: CreateGoal | LinkWallet | StakeAndUnlockGoal | ConfirmTaskCompletion | ClaimStake | SettleGoal | CreateProject | CreateTask | ConfirmTask | DonateToProject | ClaimReward | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'CreateGoal') {
            body = beginCell().store(storeCreateGoal(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'LinkWallet') {
            body = beginCell().store(storeLinkWallet(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'StakeAndUnlockGoal') {
            body = beginCell().store(storeStakeAndUnlockGoal(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ConfirmTaskCompletion') {
            body = beginCell().store(storeConfirmTaskCompletion(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ClaimStake') {
            body = beginCell().store(storeClaimStake(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SettleGoal') {
            body = beginCell().store(storeSettleGoal(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'CreateProject') {
            body = beginCell().store(storeCreateProject(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'CreateTask') {
            body = beginCell().store(storeCreateTask(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ConfirmTask') {
            body = beginCell().store(storeConfirmTask(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DonateToProject') {
            body = beginCell().store(storeDonateToProject(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ClaimReward') {
            body = beginCell().store(storeClaimReward(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getWalletToGithub(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('walletToGithub', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserGithubUser(), source.readCellOpt());
        return result;
    }
    
    async getAllGoals(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('allGoals', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), dictValueParserGoalInfo(), source.readCellOpt());
        return result;
    }
    
    async getUserGoals(provider: ContractProvider, address: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(address);
        let source = (await provider.get('userGoals', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256), source.readCellOpt());
        return result;
    }
    
    async getGoalDetails(provider: ContractProvider, goalId: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(goalId);
        let source = (await provider.get('goalDetails', builder.build())).stack;
        const result = loadGetterTupleGoalInfo(source);
        return result;
    }
    
    async getAllTasks(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('allTasks', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), dictValueParserTask(), source.readCellOpt());
        return result;
    }
    
    async getUnconfirmedTasks(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('unconfirmedTasks', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), dictValueParserTask(), source.readCellOpt());
        return result;
    }
    
    async getAllProjectIds(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('allProjectIds', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), dictValueParserProject(), source.readCellOpt());
        return result;
    }
    
    async getProjectParticipants(provider: ContractProvider, projectId: string) {
        let builder = new TupleBuilder();
        builder.writeString(projectId);
        let source = (await provider.get('projectParticipants', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.Address(), source.readCellOpt());
        return result;
    }
    
    async getProjectUserPoints(provider: ContractProvider, projectId: string, user: Address) {
        let builder = new TupleBuilder();
        builder.writeString(projectId);
        builder.writeAddress(user);
        let source = (await provider.get('projectUserPoints', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getTotalRewards(provider: ContractProvider, user: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(user);
        let source = (await provider.get('totalRewards', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getClaimedRewards(provider: ContractProvider, user: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(user);
        let source = (await provider.get('claimedRewards', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getUserPoints(provider: ContractProvider, user: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(user);
        let source = (await provider.get('userPoints', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getUserCompletedTasks(provider: ContractProvider, user: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(user);
        let source = (await provider.get('userCompletedTasks', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigUint(256), Dictionary.Values.BigUint(256), source.readCellOpt());
        return result;
    }
    
    async getGithubByWallet(provider: ContractProvider, wallet: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(wallet);
        let source = (await provider.get('githubByWallet', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
}