import { storyService } from '../services/story.service.local'
import { store } from '../store/store'
import { ADD_STORY, REMOVE_STORY, SET_STORYS, SET_STORY, UPDATE_STORY } from './story.reducer'

export async function loadStorys() {
    try {
        const storys = await storyService.query()
        console.log('Storys from DB:', storys)
        store.dispatch(getCmdSetStorys(storys))
    } catch (err) {
        console.log('Cannot load storys', err)
        throw err
    }
}

export async function loadStory(storyId) {
    try {
        const story = await storyService.getById(storyId)
        console.log('Story from DB:', story)
        store.dispatch(getCmdSetStory(story))
    } catch (err) {
        console.log('Cannot load story', err)
        throw err
    }
}

export async function removeStory(storyId) {
    try {
        await storyService.remove(storyId)
        store.dispatch(getCmdRemoveStory(storyId))
    } catch (err) {
        console.log('Cannot remove story', err)
        throw err
    }
}

export async function addStory(story) {
    try {
        const savedStory = await storyService.save(story)
        console.log('Added Story', savedStory)
        store.dispatch(getCmdAddStory(savedStory))
        return savedStory
    } catch (err) {
        console.log('Cannot add story', err)
        throw err
    }
}

export async function updateStory(story) {
    try {
        const savedStory = await storyService.save(story)
        console.log('Updated Story:', savedStory)
        store.dispatch(getCmdUpdateStory(savedStory))
        return savedStory
    } catch (err) {
        console.log('Cannot save story', err)
        throw err
    }
}

export async function addStoryComment(story, txt) {
    try {
        const newStory = await storyService.addStoryComment(story, txt)
        console.log('Added Story message', txt)
        store.dispatch(getCmdUpdateStory(newStory))
        return newStory
    } catch (err) {
        console.log('Cannot add story msg', err)
        throw err
    }
}

export async function editStoryComment(story, comment) {
    try {
        const newStory = await storyService.editStoryComment(story, comment)
        console.log('Updated task', newStory)
        store.dispatch(getCmdUpdateStory(newStory))
        return newStory
    } catch (err) {
        console.log('Cannot update task', err)
        throw err
    }
}

// Command Creators:
function getCmdRemoveStory(storyId) {
    return {
        type: REMOVE_STORY,
        storyId
    }
}

function getCmdAddStory(story) {
    return {
        type: ADD_STORY,
        story
    }
}

function getCmdUpdateStory(story) {
    return {
        type: UPDATE_STORY,
        story
    }
}

function getCmdSetStorys(storys) {
    return {
        type: SET_STORYS,
        storys
    }
}

function getCmdSetStory(story) {
    return {
        type: SET_STORY,
        story
    }
}
