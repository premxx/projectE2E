function vehicle()
{
    this.color = 'white';
    this.brand = 'mercedes';
    this.getModel = function()
    {
        console.log('this is royal edition');
    }
}
module.exports = new vehicle();

