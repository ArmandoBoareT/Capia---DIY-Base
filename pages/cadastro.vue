<template>
    <section>
        

      <div class="column is-4">
      <b-field label="Name" :label-position="labelPosition">
            <b-input value="Kevin Garvey"></b-input>
        </b-field>

        <b-field label="Email"
            :label-position="labelPosition"
            type="is-danger"
            message="This email is invalid">
            <b-input type="email"
                value="john@"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username"
            :label-position="labelPosition"
            type="is-success"
            message="This username is available">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password"
            :label-position="labelPosition"
            type="is-warning">
            <b-input value="123" type="password" maxlength="30"></b-input>
            <template #message>
                <div>Password is too short</div>
                <div>Password must have at least 8 characters</div>
            </template>
        </b-field>
      
      </div>
      
    </section>
</template>

<script>
export default {
    data() {
        return {
            labelPosition: 'on-border'
        }
    }
}
</script>
