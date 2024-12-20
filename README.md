# React Native FlatList Performance Issues with Large Datasets

This repository demonstrates a common performance issue encountered when using the FlatList component in React Native with large datasets. The issue is caused by rendering a large number of items, which can lead to slow rendering and memory problems. The solution involves implementing techniques like pagination and virtualization to improve performance.

## Bug

The `FlatListBug.js` file demonstrates the issue where rendering a large dataset results in slow rendering and memory issues.  The component tries to render a large array of items at once, causing performance problems.

## Solution

The `FlatListBugSolution.js` file provides a solution using pagination.  This approach loads data in chunks, only rendering a limited number of items at any given time. This significantly improves performance for large datasets.

## Usage

Clone the repository and run the example apps using the React Native CLI.