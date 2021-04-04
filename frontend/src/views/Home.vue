<template>
    <div class="container">
        <h2 style="text-align: center;">NFL AI Betting Simulation Data 2019</h2>
        <div class="form-container">
            <label class="col-md-2">Select Week:</label>
            <b-form-select class="col-md-8" v-model="selected" :options="options" v-on:change="get_selected_item"></b-form-select>
            <!--b-button class="col-md-2" v-on:click="get_selected_item">Go!</b-button-->
        </div>
        <div v-for="prediction in predictions_data" v-bind:key="prediction">
            <b-card :title="prediction.date">
                <table>
                    <tr>
                        <th style="text-align: left; padding-right:175px;">Team Name</th>
                        <th style="text-align: left; padding-right:175px;">Spread</th>
                        <th style="text-align: left; padding-right:175px;">Cover Probability</th>
                        <th style="text-align: left; padding-right:175px;">Outcome</th>
                    </tr>
                    <tr>
                        <td style="text-align: left;">{{prediction.home_team_name}}</td>
                        <td style="text-align: left;" v-if="prediction.spread.favored_team == prediction.home_team_name">{{prediction.spread.point_spread}}</td>
                        <td style="text-align: left;" v-else></td>
                        <td style="text-align: left;">{{prediction.probability.home_team_probability.toFixed(2)}}</td>
                        <td style="text-align: left;">{{prediction.score.home_team_score}}</td>
                    </tr>
                    <tr>
                        <td style="text-align: left;">{{prediction.away_team_name}}</td>
                        <td style="text-align: left;" v-if="prediction.spread.favored_team == prediction.away_team_name">{{prediction.spread.point_spread}}</td>
                        <td style="text-align: left;" v-else></td>
                        <td style="text-align: left;">{{prediction.probability.away_team_probability.toFixed(2)}}</td>
                        <td style="text-align: left;">{{prediction.score.away_team_score}}</td>
                    </tr>
                </table>
            </b-card>
        </div>
    </div>
</template>

<script src="../javascript/Home.js"></script>
<style src="../css/Home.css"></style>